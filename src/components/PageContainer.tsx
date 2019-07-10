import {
	AppBar,
	Container,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { navigate } from "hookrouter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as React from "react";

const drawerWidth = 240;

interface PageContainerProps {
	children: any;
}

const PageContainer = (props: PageContainerProps) => {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	function handleListItemClick(index: number): void {
		if (index === 0) {
			navigate("/");
		} else if (index === 1) {
			navigate("/content-detail");
		} else if (index === 2) {
			navigate("/about");
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
						<ListItem button key={text} onClick={_e => handleListItemClick(index)} selected={selectedIndex === index}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Container className={classes.container}>{props.children}</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			justifyContent: "center",
			marginLeft: drawerWidth,
			marginTop: 64,
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
	}),
);

export default PageContainer;
