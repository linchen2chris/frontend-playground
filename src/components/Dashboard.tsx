import {
	AppBar,
	Button,
	Container,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { A, navigate } from "hookrouter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const reactLogo = require("./../assets/img/react_logo.svg");

const drawerWidth = 240;

const Dashboard = () => {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number): void {
    if(index === 0) {
      navigate("/"); 
    } else if(index == 1) {
      navigate("/content-detail");
    } else if (index === 2) {
      navigate("/about")
    }
		setSelectedIndex(index);
	}
	return (
		<Container>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Permanent drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<List>
					{["Dashboard", "Content", "About"].map((text, index) => (
						<ListItem button key={text} onClick={e => handleListItemClick(e, index)} selected={selectedIndex === index}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Container classes={{ root: classes.container }}>
				<img src={reactLogo} height="480" />
				<A href="/about">About Page</A>
				<A href="/content">Content Detail</A>
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
		appBar: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		button: {
			margin: theme.spacing(1),
			color: "white",
		},
	}),
);
export default Dashboard;
