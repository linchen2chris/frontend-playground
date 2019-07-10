import { Button } from "@material-ui/core";
import PageContainer from "./PageContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";

const reactLogo = require("./../assets/img/react_logo.svg");

const Dashboard = () => {
	const classes = useStyles();

	return (
		<PageContainer>
			<img src={reactLogo} height="480" />
			<Button variant="contained" color="secondary" className={classes.button}>
				Default
			</Button>
		</PageContainer>
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

export default Dashboard;
