import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <p></p>,
			children: [
				{
					path: "about",
					element: <p></p>,
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
