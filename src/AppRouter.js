import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import App from "./App";

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			errorElement: (
				<Error errorcode="404" errormessage="Element nicht gefunden." />
			),
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "idea",
					element: <p></p>,
				},
				{
					path: "rules",
					element: <p></p>,
				},
				{
					path: "order",
					element: <p></p>,
				},
				{
					path: "privacy",
					element: <p></p>,
				},
				{
					path: "impressum",
					element: <p></p>,
				},
				{
					path: "contact",
					element: <p></p>,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
