import HeaderStyles from "./header.module.css";
import { AppBar, Box, IconButton, Toolbar, Button } from "@mui/material";
import NavDrawer from "./NavDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ data }) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const toggleDrawer = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={toggleDrawer}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						component='img'
						src={data?.logo?.logoImage}
						title='Holly Vines Logo'
						sx={{
							objectFit: "cover",
							height: "30px",
							width: "30px",
							display: { xs: "none", sm: "block" },
						}}
					/>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{data?.navItems.map((item, i) => (
							<Button
								color='secondary'
								//className={HeaderStyles.navLink}
								variant='text'
								href={item?.href}
								key={i}
							>
								{item?.linkName}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<NavDrawer
					handleDrawerToggle={toggleDrawer}
					navItems={data?.navItems}
					logo={data?.logo?.logoImage}
					mobileOpen={mobileOpen}
				/>
			</Box>
		</Box>
	);
}
