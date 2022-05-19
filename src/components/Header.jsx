import * as React from "react";
import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link, useNavigate } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthValue } from "./contexts/AuthContext";
import UserMenu from "./UserMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const pages = [
  { title: "Home", route: "/houses" },
  { title: "About us", route: "/about" },
  { title: "Contacts", route: "/contacts" },
];

const Header = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { value } = AuthValue();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" style={{ backgroundColor: "#000" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 6,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <TravelExploreIcon />
            myHomie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ title, route }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Link to={route}>{title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <TravelExploreIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ title, route }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link style={{ textDecoration: "none" }} to={route}>
                  <Typography color="white">{title}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
          {value.currentUser ? (
            <Box>
              <IconButton
                sx={{ color: "fff" }}
                onClick={() => navigate("/booking-payment")}
              >
                <Badge
                  badgeContent={cart.length}
                  color="error"
                  sx={{ mr: "30px" }}
                >
                  <ShoppingCartIcon sx={{ color: "#fff", fontSize: "32px" }} />
                </Badge>
              </IconButton>
            </Box>
          ) : (
            <></>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 0 }}>
              {value.currentUser ? (
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    color: "black",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#000",
                    },
                  }}
                  variant="contained"
                  startIcon={<AddBusinessIcon />}
                  onClick={() => navigate("/add-house")}
                >
                  Add new post
                </Button>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", mr: "20px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "black",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                      mr: "20px",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                  <Typography>or</Typography>
                </Box>
              )}
            </Box>
            {value.currentUser ? (
              <Box sx={{ mx: 2 }}>
                <IconButton
                  onClick={(event) => {
                    setUserMenuOpen(true);
                    setAnchorElMenu(event.currentTarget);
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: 36, color: "white" }} />
                </IconButton>
                <UserMenu
                  userMenuOpen={userMenuOpen}
                  setUserMenuOpen={setUserMenuOpen}
                  anchorElMenu={anchorElMenu}
                />
              </Box>
            ) : (
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#000",
                  },
                  width: "100px",
                }}
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
