// This component is used to render the mobile menu just the links, no the entire nav bar.
// This takes links array to render the links and active to set the active link styles and onClick to set active nav item.
import Link from "next/link";

import * as types from "./types";

export default function MobileMenu(props: types.MenuProps) {
  //Props
  const { links, active, onClick } = props;

  return (
    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {links.map((navLink, index) => (
          <li
            onClick={() => onClick(index)}
            className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 ${
              active === index
                ? "bg-purple-600 text-white"
                : "text-gray-900 active:text-purple-600 hover:text-purple-600"
            }`}
            key={index}
          >
            <Link href={navLink?.link}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
