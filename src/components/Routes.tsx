import Dashboard from "./Dashboard";
import About from "./About";
import ContentDetail from "./ContentDetail";
import * as React from "react";

const Routes = {
	"/": () => <Dashboard />,
	"/content-detail": () => <ContentDetail />,
	"/about": () => <About />,
};
export default Routes;
