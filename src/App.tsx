import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

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
						path="/login"
						element={<Login />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
