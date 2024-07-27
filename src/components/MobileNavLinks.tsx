import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
	const { logout } = useAuth0();
	return (
		<div>
			<div className='space-y-4'>
				<Link to='/order-status' className='block font-bold hover:text-orange-500'>
					Order Status
				</Link>
				<Link
					to='/manage-restaurant'
					className='block font-bold hover:text-orange-500'>
					My Restaurant
				</Link>
				<Link to='/user-profile' className='block font-bold hover:text-orange-500'>
					User Profile
				</Link>
			</div>
			<div className='absolute bottom-4 left-4 right-4'>
				<Button
					className='w-full bg-gray-800 text-white py-2 px-4 rounded'
					onClick={() => logout()}>
					Log Out
				</Button>
			</div>
		</div>
	);
};

export default MobileNavLinks;
