// This displays the logo and the company name for the landing page
import Link from "next/link";
import Logo from "../../icons/Logo";
import * as types from "./types";

export default function CompanyLogo({ size }: types.Props) {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Logo classNames="h-6 mr-3 sm:h-9" />
      <span
        className={`self-center font-semibold whitespace-nowrap text-gray-900 ${
          size ? size : "text-xl"
        }`}
      >
        Landwind
      </span>
    </Link>
  );
}
