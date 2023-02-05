// Unlike Desktop, in mobile we have a different navbar, we need to add a open/close buttons.
// That is why we have a seperate component.

import * as types from "./types";
import Close from "../../../icons/Close";
import Hamburger from "../../../icons/Hamburger";

export default function MobileView(props: types.MobileViewProps) {
  const { menuOpen, onClick } = props;
  return (
    <div
      onClick={() => onClick()}
      className={`inline-flex items-center cursor-pointer p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
    >
      {!menuOpen ? <Hamburger /> : <Close />}
    </div>
  );
}
