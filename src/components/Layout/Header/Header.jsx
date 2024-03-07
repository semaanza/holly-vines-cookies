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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AppBar component="nav" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="a" href="/">
            <Box
              component="img"
              src={data?.logo?.logoImage}
              title="Holly Vines Logo"
              sx={{
                objectFit: "cover",
                height: "30px",
                width: "30px",
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {data?.navItems.map((item, i) => (
              <Button
                color="secondary"
                //className={HeaderStyles.navLink}
                variant="text"
                href={item?.href}
                key={i}
              >
                {item?.linkName}
              </Button>
            ))}
          </Box>
          <Box>
            <Button
              sx={{ color: "white", backgroundColor: "green" }}
              variant=""
              href="/contact"
            >
              Order Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ display: { xs: "flex", sm: "none" } }}>
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
