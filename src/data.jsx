import { createContext } from "react";

export async function productLoader() {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
}

// cartContext contains an array of objects, each object
// representing a product
// { product.id, qty }
export const CartContext = createContext([
	{
		id: 1,
		qty: 2,
	},
	{
		id: 5,
		qty: 3,
	},
]);
