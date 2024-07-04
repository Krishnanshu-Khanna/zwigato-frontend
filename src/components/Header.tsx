import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav.tsx";

const Header = () => {
	return (
		<div className='border-b-2 border-b-orange-500 py-6'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link to='/' className='text-3xl font-bold tracking-tight text-orange-500 flex gap-2 mr-12'>
                    <img src="./images/logo.png" alt="logo" className="w-10" />
					Zwigato.com
				</Link>
				<div className='md:hidden'>
					<MobileNav />
				</div>
				<div className='hidden md:block'>
					<MainNav />
				</div>
			</div>
		</div>
	);
};

export default Header;
