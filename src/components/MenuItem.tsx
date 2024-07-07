import { Plus, ShoppingCart } from "lucide-react";
import { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
	menuItem: MenuItem;
	addToCart: () => void;
};

const MenuItems = ({ menuItem, addToCart }: Props) => {
	return (
		<Card className='cursor-pointer' onClick={addToCart}>
			<CardHeader>
				<CardTitle>
					<span className="flex flex-row justify-between items-center">{menuItem.name} <Plus/></span>
				</CardTitle>
			</CardHeader>
			<CardContent className='font-bold'>
				₹{(menuItem.price / 100).toFixed(2)}
			</CardContent>
		</Card>
	);
};

export default MenuItems;
