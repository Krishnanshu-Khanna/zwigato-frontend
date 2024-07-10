import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { getCityFromCoordinates, useGeolocation } from "@/api/GetCityApi";

const MainNav = () => {
	const { location } = useGeolocation();
	const [city, setCity] = useState<string | null>(null);

	useEffect(() => {
		if (location) {
			const fetchCity = async () => {
				const cityName = await getCityFromCoordinates(
					location.latitude,
					location.longitude
				);
				setCity(cityName);
			};
			fetchCity();
		}
	}, [location]);

	const navigate= useNavigate();
	
	const handleCityClick=()=>{
		const cityCountry=city?.split(", ")[0]
		navigate('/search/'+cityCountry);
	}

	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		<span className='flex space-x-1 items-center justify-between'>
			<span>
				<div
					className='font-bold hover:text-orange-500 flex hover:cursor-pointer'
					onClick={handleCityClick}>
					Restaurants in
					{city !== null ? (
						<span className=' font-normal text-center text-orange-500 hover:text-black drop-shadow-xl mr-5'>
							📍{city}
						</span>
					) : (
						<Button disabled>Loading...</Button>
					)}
				</div>
			</span>
			{isAuthenticated ? (
				<>
					<Link to='/order-status' className='font-bold hover:text-orange-500'>
						Order Status
					</Link>
					<UsernameMenu />
				</>
			) : (
				<Button
					variant='ghost'
					className='font-bold hover:text-orange-500 hover:bg-white'
					onClick={async () => await loginWithRedirect()}>
					Log In
				</Button>
			)}
		</span>
	);
};
export default MainNav;
