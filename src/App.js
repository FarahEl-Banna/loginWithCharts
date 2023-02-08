import Routes from "./CombinedRoutes";
import { Router } from "react-router-dom";

function App() {
	return (
		<Router history={require("history").createBrowserHistory()}>
			<Routes />
		</Router>
	);
}

export default App;