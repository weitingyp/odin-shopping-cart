export async function productLoader() {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
}
