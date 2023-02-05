// If you want to add a value to context provider add it here(value prop) and also go to NavigationContext.tsx
//and add it there too
import React, { useState } from "react";
import NavigationContext from "./NavigationContext";

interface Props {
  children: React.ReactNode;
}

export default function NavigationContextProvider({ children }: Props) {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);

  return (
    <NavigationContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
}
