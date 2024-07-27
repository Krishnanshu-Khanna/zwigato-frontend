import { CircleUserRound, Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import { getCityFromCoordinates, useGeolocation } from "@/api/GetCityApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
	const { isAuthenticated, loginWithRedirect, user } = useAuth0();
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
		<Sheet>
			<SheetTrigger>
				<Menu className='text-orange-500' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between h-full'>
				<div className='flex-grow'>
					<SheetTitle>
						{isAuthenticated ? (
							<span className='flex items-center font-bold gap-2'>
								<CircleUserRound className='text-orange-500' />
								{user?.name || user?.email}
							</span>
						) : (
							<span className='font-semibold'> Welcome to Zwigato.com!</span>
						)}
					</SheetTitle>
					<Separator className='mt-3' />
					<div
						className='font-bold my-4 hover:text-orange-500 flex hover:cursor-pointer'
						onClick={handleCityClick}>
						Restaurants in
						{city !== null ? (
							<span className='font-normal text-center text-orange-500 hover:text-black drop-shadow-xl mr-5'>
								📍{city}
							</span>
						) : (
							<Button disabled>Loading...</Button>
						)}
					</div>
					<Separator />
					<div className='h-[calc(100vh-200px)] overflow-y-auto'>
						{isAuthenticated ? <MobileNavLinks /> : null}
					</div>
				</div>
				<div className='mt-auto'>
					{!isAuthenticated && (
						<Button
							onClick={() => loginWithRedirect()}
							className='w-full font-bold bg-orange-500'>
							Log In
						</Button>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
