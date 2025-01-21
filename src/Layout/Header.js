import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem, Stack } from "@mui/material";
import { Download } from "@mui/icons-material";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomButton from "../components/CustomButton";
import Grid from "@mui/material/Grid";
import EmojiGrid from "../components/EmogiContainer";

const pages = ["Home", "Swerri", "SWET Token", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const Logo = styled("img")({
    width: "100px",
    height: "30px",
    marginRight: "10px",
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <Logo src="https://swerri.io/image/png/logo-dark.png" alt="Logo" />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "64px",
            }}
          >
            {pages.map((page) => {
              if (page === "Swerri") {
                return (
                  <Box
                    key={page}
                    sx={{
                      position: "relative",
                      "&:hover .dropdown-menu": {
                        display: "block",
                      },
                      "&:hover .hover-effect": {
                        width: "100%",
                        backgroundColor: "#785AEC",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        color: "#262729",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        letterSpacing: "-0.1px",
                        lineHeight: 1.75,
                        textTransform: "none",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        "&:hover": {
                          color: "#785AEC",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {page}

                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          marginLeft: "5px",
                          fontSize: "18px",
                          transition: "transform 0.3s ease",
                          transform: Boolean(anchorEl)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <ArrowDropDownIcon />
                      </Box>
                    </Button>

                    <Box
                      className="hover-effect"
                      sx={{
                        position: "absolute",
                        bottom: "-4px",
                        left: "0",
                        height: "2px",
                        width: "0%",
                        transition: "width 0.3s ease",
                      }}
                    />
                    <Box
                      className="dropdown-menu"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 10,
                        backgroundColor: "transparent",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "10px 0",
                        width: "200px",
                        borderTop: "4px solid #785AEC",
                      }}
                    >
                      <MenuItem
                        sx={{
                          "&:hover": {
                            color: "#785AEC",
                            backgroundColor: "transparent",
                          },
                        }}
                        onClick={handleCloseMenu}
                      >
                        What is Swerri?
                      </MenuItem>
                      <MenuItem
                        sx={{
                          "&:hover": {
                            color: "#785AEC",
                          },
                        }}
                        onClick={handleCloseMenu}
                      >
                        Swerri Circles
                      </MenuItem>
                      <MenuItem
                        sx={{
                          "&:hover": {
                            color: "#785AEC",
                          },
                        }}
                        onClick={handleCloseMenu}
                      >
                        Swerri Master
                      </MenuItem>
                    </Box>
                  </Box>
                );
              } else {
                return (
                  <Button
                    key={page}
                    sx={{
                      color: "#262729",
                      display: "block",
                      fontSize: "16px",
                      fontWeight: 400,
                      fontStyle: "normal",
                      letterSpacing: "-0.1px",
                      lineHeight: 1.75,
                      textTransform: "none",
                      transition: "color 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        fontWeight: 600,
                        color: "#785AEC",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                );
              }
            })}
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Download App">
              <CustomButton
                title="Download App"
                MFontSize="15px"
                width="100%"
                bgColor="#785aec"
                color="white"
                hoverbgcolor="#6a26da"
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
