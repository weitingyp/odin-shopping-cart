import { useLoaderData } from "react-router-dom";

export default function ShopPage() {
	const products = useLoaderData();
	return (
		<div id="shop-page" className="">
			<div className="py-10">
				<h1 className="text-4xl text-center font-bold">Shop</h1>
			</div>
			<div id="product-grid" className="grid grid-cols-2 sm:grid-cols-4">
				{products.map((product) => (
					<div
						key={product.id}
						className="product-card border border-1/4 border-solid border-slate-200 p-5 flex flex-col gap-2"
					>
						<div className="w-full h-60 overflow-hidden">
							<img src={product.image} className="object-center object-cover" />
						</div>
						<div className="font-bold">${product.price.toFixed(2)}</div>
						<div className="h-24 overflow-hidden overflow-ellipsis">
							{product.title}
						</div>
						<div className="w-1/2 ml-auto grid grid-cols-3">
							<input
								type="number"
								name="qty"
								value="0"
								className="inline bg-slate-100 px-2"
							></input>
							<button
								type="button"
								className="px-2 rounded-sm bg-teal-600 text-white hover:bg-teal-700"
							>
								+
							</button>
							<button
								type="button"
								className="px-2 rounded-sm bg-red-600 text-white hover:bg-red-700"
							>
								-
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
