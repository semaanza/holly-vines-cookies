import HeaderStyles from "./header.module.css";

import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	Drawer,
} from "@mui/material";

export default function NavDrawer({
	navItems,
	handleDrawerToggle,
	logo,
	mobileOpen,
}) {
	const drawerWidth = 240;

	return (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Drawer
				variant='temporary'
				onClose={handleDrawerToggle}
				//container={container}
				open={mobileOpen}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				<Box
					component='img'
					src={logo}
					title={"Holly Vines Logo"}
					sx={{ objectFit: "cover", height: "30px", width: "30px" }}
				/>
				<Divider />
				<List>
					{navItems?.map((item, i) => (
						<ListItem key={i} disablePadding>
							<ListItemButton
								//className={HeaderStyles.navLink}
								sx={{ color: "primary.main" }}
								component='a'
								alignItems='center'
							>
								<ListItemText>{item?.linkName}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
