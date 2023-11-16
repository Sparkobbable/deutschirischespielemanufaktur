import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import App from "./App";
import Idea from "./pages/idea/Idea";
import Rules from "./pages/rules/Rules";
import Order from "./pages/order/Order";
import Privacy from "./pages/privacy/Privacy";
import Impressum from "./pages/impressum/Impressum";
import Contact from "./pages/contact/Contact";

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
					element: <Idea />,
				},
				{
					path: "rules",
					element: <Rules />,
				},
				{
					path: "order",
					element: <Order />,
				},
				{
					path: "privacy",
					element: <Privacy />,
				},
				{
					path: "impressum",
					element: <Impressum />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
