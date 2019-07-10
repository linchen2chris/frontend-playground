import { purple, green } from '@material-ui/core/colors';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootEl = document.getElementById("root");

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: green,
	},
});

render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	rootEl,
);
