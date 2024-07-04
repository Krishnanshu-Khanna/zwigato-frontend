import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
	const [city, setCity] = useState<string | null>(null);
	const navigate= useNavigate();
	useEffect(() => {
		const fetchLocation = async () => {
			try {
				if ("geolocation" in navigator) {
					navigator.geolocation.getCurrentPosition(
						async (position) => {
							const { latitude, longitude } = position.coords;
							console.log("Geolocation:", latitude, longitude);
							const cityName = await getCityFromCoordinates(latitude, longitude);
							setCity(cityName);
						},
						(error) => {
							console.error("Error getting geolocation:", error);
							setCity(null);
						}
					);
				} else {
					console.error("Geolocation not supported");
					setCity(null);
				}
			} catch (error) {
				console.error("Error fetching geolocation:", error);
				setCity(null);
			}
		};

		fetchLocation();
	}, []);

	const getCityFromCoordinates = async (
		lat: number,
		lon: number
	): Promise<string> => {
		try {
			const response = await fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
			);
			const data = await response.json();
			const city = data.city+", "+data.principalSubdivision+", "+data.countryName;
			return (city);
		} catch (error) {
			console.error("Error fetching city:", error);
			return "Unknown";
		}
	};

	const handleCityClick=()=>{
		navigate('/search/'+city);
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
