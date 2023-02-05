// This is header component for the application expect the landing page. If you are looking for the
// header component for the landing page, then please go to components/landing/header.

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import { useState, useContext } from "react";
import MuiAppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

import * as styles from "./styles";
import * as types from "./types";

import NavigationContext from "../NavigationContext";
import { useAppSelector } from "../../hooks/common/useRedux";
import { selectUserImage } from "../../redux/user/selectors";
import RenderIf from "../render-if";

let drawerWidth: number = 240;
const StyledHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<types.AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header() {
  // Unused for now.
  const pages = ["Products", "Pricing", "Blog"]; // Used to render links which was on landing page.
  const [activePage, setActivePage] = useState<string | null>(null); // Used to store current active link.

  //Hooks, Contexts, Redux
  const router = useRouter();
  const { open, toggleSidebar } = useContext(NavigationContext);
  const userImage = useAppSelector((state) => selectUserImage(state)) || "";

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  if (!userImage) console.log("no user image"); // Need to throw a error here.

  //Handles opening of user menu.
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  //Handles closing of user menu.
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <StyledHeader position="absolute" open={open}>
      {/* <Toolbar sx={styles.toolbarStyles}>
        {pages.map((page) => (
          <Typography
            key={page}
            onClick={() => setActivePage(page)}
            component="p"
            color={activePage === page ? "#fff" : "#6b7280"}
            sx={{
              fontSize: "14px",
              "&:hover": { color: "#fff", cursor: "pointer" },
            }}
          >
            {page}
          </Typography>
        ))}
      </Toolbar> */}
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {router.pathname === "/"
            ? "Home"
            : router.pathname.substring(1, 2).toLocaleUpperCase() +
              router.pathname.substring(2)}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box sx={{ flexGrow: 0, marginLeft: "16px" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src={userImage} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "75px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <Box key={setting}>
                <RenderIf condition={setting !== "Logout"}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </RenderIf>
                <RenderIf condition={setting === "Logout"}>
                  <Link
                    color="inherit"
                    underline="none"
                    href="/api/auth/logout"
                  >
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                </RenderIf>
              </Box>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </StyledHeader>
  );
}
