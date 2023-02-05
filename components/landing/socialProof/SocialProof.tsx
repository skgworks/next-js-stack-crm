import Link from "next/link";
import Stat from "./Stat";
import ArrowRight from "../../../icons/ArrowRight";
import Server from "../../../icons/Server";
import Users from "../../../icons/Users";
import Cart from "../../../icons/Cart";
import Globe from "../../../icons/Globe";

export default function SocialProof() {
  const { caption, title, description, links, stats } = {
    caption: "Trusted Worldwide",
    title: "Trusted by over 600 million users and 10,000 teams",
    description:
      "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.",
    links: [
      { text: "Explore Legality Guide", url: "#" },
      { text: "Visit the Trust Center", url: "#" },
    ],
    stats: [
      [
        {
          icon: (
            <Server classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "99.99% uptime",
          description: "for Flowbite, with zero maintenance downtime",
        },
        {
          icon: (
            <Users classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "600M+ Users",
          description: "trusted by over 600 milion users around the world",
        },
      ],
      [
        {
          icon: (
            <Globe classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "100+ countries",
          description: "have used Flowbite to create functional websites",
        },
        {
          icon: (
            <Cart classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "Millions",
          description: "of transactions processed every day",
        },
      ],
    ],
  };

  return (
    <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-purple-600">{caption}</p>

        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {description}
        </p>
        <ul className="pt-6 mt-6 space-y-4 border-t border-gray-200">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800"
                href={link.url}
              >
                {link.text}
                <ArrowRight classNames="w-5 h-5 ml-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        {stats.map((items, index) => (
          <div
            key={index}
            className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
          >
            {items.map((stat, index) => (
              <Stat key={index} data={stat} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
