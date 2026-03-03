import { Outlet } from "react-router-dom";

export default function Root() {
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
			<Outlet />
		</div>
	);
}
