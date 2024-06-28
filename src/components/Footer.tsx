import { DownloadCloudIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className='bg-black py-10'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
				<span className='text-3xl text-orange-500 font-bold tracking-tight'>
					Zwigato.com
				</span>
				<span className='text-white font-bold tracking-tight flex gap-6'>
					<span key='year'>©️ {year} Khanna Tech Pvt. Ltd</span>
					<span key='privacy-policy'>Privacy Policy</span>
					<span key='terms-of-service'>Terms of Service</span>
				</span>
			</div>
			<div className='flex flex-row justify-center items-center gap-4 h-10 mt-4'>
				<InstagramIcon color="white"/>
                <FacebookIcon color="white"/>
                <TwitterIcon color="white"/>
                <DownloadCloudIcon color="white"/>
			</div>
		</div>
	);
};

export default Footer;
