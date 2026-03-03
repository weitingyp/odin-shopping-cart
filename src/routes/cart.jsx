import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../data";

export default function CartPage() {
	const { cart, setCart } = useContext(CartContext);
	const products = useLoaderData();
	const subtotal =
		cart.length > 0
			? cart.reduce((sum, pdt) => {
					const pdtInfo = products.find((p) => p.id === pdt.id);
					return sum + pdtInfo.price * pdt.qty;
				}, 0)
			: 0;
	const shippingCost = 0;
	return (
		<div id="cart-page" className="">
			<div className="py-10">
				<h1 className="text-4xl text-center font-bold">Cart</h1>
			</div>

			{cart.length > 0 ? (
				<div className="flex flex-col sm:flex-row sm:justify-end gap-10">
					<div className="grid">
						{/* Header row of the table */}
						<div className="grid grid-cols-6 border border-1/2 border-solid border-slate-300 font-bold bg-slate-100">
							<div className="border border-1/2 border-solid border-slate-300 p-2"></div>
							<div className="border border-1/2 border-solid border-slate-300 p-2 col-span-2">
								Item
							</div>
							<div className="border border-1/2 border-solid border-slate-300 p-2">
								Item price
							</div>
							<div className="border border-1/2 border-solid border-slate-300 p-2">
								Qty
							</div>
							<div className="border border-1/2 border-solid border-slate-300 p-2">
								Total price
							</div>
						</div>
						{
							/* Each row in the table represents a product/SKU */
							cart.map((pdt) => {
								const pdtInfo = products.filter((_) => _.id === pdt.id)[0];
								return (
									<div
										key={pdt.id}
										className="grid grid-cols-6 border border-1/2 border-solid border-slate-300"
									>
										<div className="border border-1/2 border-solid border-slate-300 p-2">
											<img className="max-h-35" src={pdtInfo.image}></img>
										</div>
										<div className="border border-1/2 border-solid border-slate-300 p-2 col-span-2">
											{pdtInfo.title}
										</div>
										<div className="border border-1/2 border-solid border-slate-300 p-2">
											${pdtInfo.price}
										</div>
										<div className="border border-1/2 border-solid border-slate-300 p-2">
											{pdt.qty}
										</div>
										<div className="border border-1/2 border-solid border-slate-300 p-2">
											${pdtInfo.price * pdt.qty}
										</div>
									</div>
								);
							})
						}
					</div>
					<div className="p-5 border border-solid border-1/2 border-slate-400 grid grid-cols-2 grid-rows-4 h-auto">
						<div className="font-bold">Subtotal</div>
						<div className="text-right">{subtotal}</div>
						<div className="font-bold">Shipping & taxes</div>
						<div className="text-right">{shippingCost}</div>
						<div className="font-bold">Total</div>
						<div className="text-right font-bold">
							{subtotal + shippingCost}
						</div>
						<div className="col-span-2">
							<button
								type="button"
								className="px-5 py-2 bg-orange-300 rounded-md font-bold hover:bg-orange-400 hover:cursor-pointer"
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			) : (
				<div>Your cart is empty right now.</div>
			)}
		</div>
	);
}
