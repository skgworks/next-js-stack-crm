// If you want to pass down anything to header and sider bar, you can add it below
// and then go to NavigationContextProvider.tsx and add it to the value prop of the provider
import React from "react";
export default React.createContext({
  open: true,
  toggleSidebar: () => {},
});
