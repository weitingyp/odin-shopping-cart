import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="flex flex-col gap-10 p-10 text-center">
			<h1 className="text-8xl">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p className="text-2xl">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
