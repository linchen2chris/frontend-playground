import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {}

const App = () => {
	const classes = useStyles();
	return (
		<div>
			<img src={reactLogo} height="480" />
			<Button variant="contained" color="secondary" className={classes.button}>
				Default
			</Button>
		</div>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
			color: "blue",
			alignSelf: "middle",
		},
	}),
);

declare let module: Object;

export default hot(module)(App);
