import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./Content";
import NavigationContextProvider from "./NavigationContextProvider";
import RenderIf from "./render-if";
import { useAppSelector } from "../hooks/common/useRedux";
import { selectLoggedIn } from "../redux/user/selectors";

//You can all the theme properties here. https://mui.com/material-ui/customization/palette/.
// Just an example is mentioned below.
const mdTheme = createTheme({
  palette: {
    // primary: { main: "#9333ea" },
  },
});

export default function Theme(props: any) {
  const isLoggedIn = useAppSelector((state) => selectLoggedIn(state));
  return (
    <>
      <RenderIf condition={!!isLoggedIn}>
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <NavigationContextProvider>
              <Header />
              <Sidebar />
            </NavigationContextProvider>
            <Content props={props} />
          </Box>
        </ThemeProvider>
      </RenderIf>
      <RenderIf condition={!isLoggedIn}>{props.children}</RenderIf>
    </>
  );
}
