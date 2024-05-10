import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ContextPlayers from "./pages/contextPlayers.tsx";
import ZustandPlayers from "./pages/zustandPlayers.tsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/contextPlayers"
						element={<ContextPlayers />}
					/>
					<Route
						path="/zustandPlayers"
						element={<ZustandPlayers />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
