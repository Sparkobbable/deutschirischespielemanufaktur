import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import menu from "./assets/icons/menu.svg";

function App() {
	return (
		<>
			<div className="flex bg-background overflow-auto w-full h-full">
				<div className="drawer lg:drawer-open">
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-content flex flex-col">
						<label
							htmlFor="my-drawer-2"
							className="btn border-none drawer-button absolute w-14 h-14 top-5 left-5 bg-headline z-30 lg:hidden"
						>
							<img className="w-14 h-14" src={menu} alt="Menü" />
						</label>
						<div className="p-10">
							<Outlet />
						</div>
					</div>
					<div className="drawer-side z-40">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<Menu />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
