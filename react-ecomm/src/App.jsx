import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="auth" element={<Auth />}>
						<Route
							path="login"
							element={<Login />}
						/>
						<Route
							path="register"
							element={<Register />}
						/>
					</Route>

					<Route path="cart" element={<Cart />} />

					<Route path="teams">
						<Route path=":teamId" />
						<Route path="new" />
						<Route index />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
