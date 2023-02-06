// This component has the links for the desktop navigation bar.

import Link from "next/link";

import * as types from "./types";

export default function DesktopMenu(props: types.MenuProps) {
  // Props
  const { links, active, onClick } = props;

  return (
    <div className="items-center justify-between w-full lg:flex lg:w-auto hidden">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {links.map((link, index) => (
          <Link key={index} onClick={() => onClick(index)} href={link.link}>
            <li
              className={`text-base font-medium hover:text-cst-purple-600 ${
                active === index ? "text-purple-600" : "text-gray-900"
              }`}
              key={index}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
