import { useRoutes } from "hookrouter";
import Routes from "./Routes";
import { hot } from "react-hot-loader";

const App = () => {
	const routeResult = useRoutes(Routes);
	return routeResult;
};

declare let module: Object;

export default hot(module)(App);
