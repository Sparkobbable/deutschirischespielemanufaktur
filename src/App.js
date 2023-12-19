import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import menu from "./assets/icons/menu.svg";
import { useEffect } from "react";
import { ApiService } from "./utils/ApiService";

function App() {
	const api = new ApiService();

	useEffect(() => {
		api.ping()
			.then(() => {})
			.catch((e) => {
				document.getElementById("systemerror").showModal();
			});
	}, []);

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
							className="btn border-none drawer-button absolute w-14 h-14 top-3 left-3 bg-headline z-30 lg:hidden"
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
			<dialog id="systemerror" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-error">Fehler!</h3>
					<p className="py-4">
						Die Anwendung ist derzeit nicht verfügbar. Probieren Sie
						es später erneut.
					</p>
				</div>
			</dialog>
			<dialog id="loading" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Bitte warten...</h3>
					<div className="w-full flex justify-center">
						<span className="loading loading-spinner loading-lg "></span>
					</div>
				</div>
			</dialog>
		</>
	);
}

export default App;
