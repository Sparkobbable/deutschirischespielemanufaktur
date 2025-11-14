import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/error/Error";
import App from "./App";
import ScrollablePage from "./pages/ScrollablePage";
import OrderForm from "./pages/order/orderform/OrderForm";

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
					element: <ScrollablePage />,
				},
				{
					path: "order/new",
					element: <OrderForm />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
