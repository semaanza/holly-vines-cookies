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
        variant="temporary"
        onClose={handleDrawerToggle}
        //container={container}
        open={mobileOpen}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box component="a" href="/" ml="10px">
          <Box
            component="img"
            src={logo}
            alt={"Holly Vines Logo"}
            href="/"
            title={"Holly Vines Logo"}
            sx={{ objectFit: "cover", height: "40px", width: "40px" }}
          />
        </Box>
        <Divider />
        <List>
          {navItems?.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                //className={HeaderStyles.navLink}
                sx={{ color: "primary.main" }}
                component="a"
                href={item?.href}
                alignItems="center"
              >
                <ListItemText>{item?.linkName}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              //className={HeaderStyles.navLink}
              sx={{ color: "primary.main" }}
              component="a"
              alignItems="center"
            >
              <ListItemText>Order Now</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
