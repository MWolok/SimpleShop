import Header from "./components/header/Header";
import Home from "./components/home/Home";

import Checkout from "./components/checkout/Checkout";
import {
	BrowserRouter as Router,
	Route,
	BrowserRouter,
} from "react-router-dom";
import AppRouter from "./components/router/AppRouter";

function App() {
	return (
		<>
			<BrowserRouter>
				<AppRouter></AppRouter>
			</BrowserRouter>
		</>
	);
}

export default App;
