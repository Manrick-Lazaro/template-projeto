import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ContextPlayers from "./pages/PlayersContext.tsx";

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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
