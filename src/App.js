import "./App.css";
import AppRouter from "./AppRouter";
import Menu from "./menu/Menu";

function App() {
	return (
		<>
			<div className="flex bg-background w-full h-full">
				<div className="border-r-2 w-1/5">
					<Menu></Menu>
				</div>
				<div className="w-4/5 p-10">
					<AppRouter></AppRouter>
				</div>
			</div>
		</>
	);
}

export default App;
