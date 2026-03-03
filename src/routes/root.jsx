import { Link, Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../data";
import Home from "./home";

export default function Root() {
	const cart = useContext(CartContext);
	return (
		<div id="container">
			<nav className="width-full bg-teal-600 flex justify-center gap-5 py-5 text-white font-bold">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? "text-slate-100 bg-teal-800 rounded-md px-3 py-1"
							: "px-3 py-1"
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/shop"
					className={({ isActive }) =>
						isActive
							? "text-slate-100 bg-teal-800 rounded-md px-3 py-1"
							: "px-3 py-1"
					}
				>
					Shop
				</NavLink>
				<NavLink
					to="/cart"
					className={({ isActive }) =>
						isActive
							? "text-slate-100 bg-teal-800 rounded-md px-3 py-1"
							: "px-3 py-1"
					}
				>
					Cart
				</NavLink>
			</nav>
			<div id="page" className="px-10">
				<CartContext value={cart}>
					<Outlet />
				</CartContext>
			</div>
		</div>
	);
}
