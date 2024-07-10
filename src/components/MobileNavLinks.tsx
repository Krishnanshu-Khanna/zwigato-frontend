import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { getCityFromCoordinates, useGeolocation } from "@/api/GetCityApi";
import { useEffect, useState } from "react";

const MobileNavLinks = () => {
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

	const navigate = useNavigate();

	const handleCityClick = () => {
		const cityCountry = city?.split(", ")[0];
		navigate("/search/" + cityCountry);
	};
	return (
		<>
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
			<Link
				to='/order-status'
				className='flex bg-white items-center font-bold hover:text-orange-500'>
				Order Status
			</Link>
			<Link
				to='/manage-restaurant'
				className='flex bg-white items-center font-bold hover:text-orange-500'>
				My Restaurant
			</Link>
			<Link
				to='/user-profile'
				className='flex bg-white items-center font-bold hover:text-orange-500'>
				User Profile
			</Link>
			<Button className='flex items-center px-3 font-bold hover:bg-gray-500'>
				Log Out
			</Button>
		</>
	);
};

export default MobileNavLinks;
