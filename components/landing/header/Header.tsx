// This is the header component just for the landing page. If you are looking for the
//header component for the dashboard or application, then please go to components/header.

import { useState } from "react";

import Logo from "../../logo";
import Button from "../button";
import * as types from "./types";
import MobileMenu from "./MobileMenu";
import MobileView from "./MobileView";
import RenderIf from "../../render-if";
import DesktopMenu from "./DesktopMenu";
import useViewport from "../../../hooks/common/useViewport";

export default function Header() {
  //Hooks and functions
  const { width } = useViewport();

  //States
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  //Data
  const { links, button } = {
    links: [
      { name: "Home", link: "#" },
      { name: "Company", link: "#" },
      { name: "Marketplace", link: "#" },
      { name: "Features", link: "#" },
      { name: "Team", link: "#" },
      { name: "Contact", link: "#" },
    ],
    button: { text: "Sign In", link: "/api/auth/login" },
  };

  // Handles click on menu icon to open/close in mobile devices.
  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Handles click on menu item to set active item.
  const onItemClick: types.onItemClick = (index) => {
    setActive(index);
  };

  return (
    <header className="fixed w-full bg-white">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto px-4">
          <Logo />
          <RenderIf condition={width > 1024}>
            <DesktopMenu active={active} links={links} onClick={onItemClick} />
          </RenderIf>
          <div className="flex-1 lg:flex-none lg:order-1 flex justify-end">
            <div>
              <Button value={button.text} link={button.link} />
            </div>
          </div>
          <MobileView menuOpen={showMenu} onClick={onMenuClick} />
          <RenderIf condition={showMenu}>
            <MobileMenu links={links} active={active} onClick={onItemClick} />
          </RenderIf>
        </div>
      </nav>
    </header>
  );
}
