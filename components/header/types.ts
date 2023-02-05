import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  loggedIn?: boolean;
}
export interface Props {
  width?: number;
}
