import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 200;

function DashboardHome(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/dashboard'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Profile"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='addgig'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Add Gig"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='gigs'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"All Gig"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='mygigs'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"My Gig"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='orders'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"All Orders"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='clientorders'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"orders by client"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='myorders'>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"My Orders(buyer)"} />
					</ListItem>
				</Link>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: "#31887D",
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						ADMIN DASHBOARD
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
}

DashboardHome.propTypes = {
	window: PropTypes.func,
};

export default DashboardHome;