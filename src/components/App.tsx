import { Button, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {}

const App = () => {
	const classes = useStyles();
	return (
		<Container>
			<Container classes={{ root: classes.container }}>
				<img src={reactLogo} height="480" />
			</Container>
			<Container classes={{ root: classes.container }}>
				<Button variant="contained" color="secondary" className={classes.button}>
					Default
				</Button>
			</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			justifyContent: "center",
		},
		button: {
			margin: theme.spacing(1),
			color: "white",
		},
	}),
);

declare let module: Object;

export default hot(module)(App);
