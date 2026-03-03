import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../data";

export default function Root() {
	const cart = useContext(CartContext);
	return (
		<div id="container">
			<nav className="width-full bg-teal-600 flex justify-center gap-5 py-5 text-white font-bold">
				<a href="" className="hover:cursor-pointer">
					Home
				</a>
				<a href="" className="hover:cursor-pointer">
					Shop
				</a>
				<a href="" className="hover:cursor-pointer">
					Cart
				</a>
			</nav>
			<div id="page" className="px-10">
				<CartContext value={cart}>
					<Outlet />
				</CartContext>
			</div>
		</div>
	);
}
