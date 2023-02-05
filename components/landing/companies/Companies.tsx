// Displays the list of companies

import Link from "next/link";

import Uber from "../../../icons/Uber";
import Airbnb from "../../../icons/Airbnb";
import Google from "../../../icons/Google";
import Spotify from "../../../icons/Spotify";
import Mailchimp from "../../../icons/Mailchimp";
import Microsoft from "../../../icons/Microsoft";

export default function Companies() {
  const data = [
    { icon: <Google classNames="h-9 hover:text-gray-900" />, url: "#" },
    { icon: <Microsoft classNames="h-9 hover:text-gray-900" />, url: "#" },
    { icon: <Spotify classNames="h-9 hover:text-gray-900" />, url: "#" },
    { icon: <Mailchimp classNames="h-9 hover:text-gray-900" />, url: "#" },
    { icon: <Airbnb classNames="h-9 hover:text-gray-900" />, url: "#" },
    { icon: <Uber classNames="h-9 hover:text-gray-900" />, url: "#" },
  ];

  return (
    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
        {data.map((company, index) => (
          <Link
            className="flex items-center lg:justify-center"
            href={company.url}
            key={index}
          >
            {company.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
