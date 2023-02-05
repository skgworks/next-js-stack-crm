import Link from "next/link";
import Logo from "../../logo";
import Github from "../../../icons/Github";
import Twitter from "../../../icons/Twitter";
import Dribbble from "../../../icons/Dribbble";
import Facebook from "../../../icons/Facebook";

export default function Footer() {
  const { links, copyright, socials } = {
    copyright: "© 2022 Flowbite, Inc. All rights reserved.",
    socials: [
      { icon: <Github classNames="w-5 h-5" />, url: "#" },
      { icon: <Twitter classNames="w-5 h-5" />, url: "#" },
      { icon: <Dribbble classNames="w-5 h-5" />, url: "#" },
      { icon: <Facebook classNames="w-5 h-5" />, url: "#" },
    ],

    links: [
      {
        title: "Company",
        links: [
          { title: "About", url: "#" },
          { title: "Premium", url: "#" },
          { title: "Blog", url: "#" },
          { title: "Affiliate Program", url: "#" },
          { title: "Get Coupon", url: "#" },
        ],
      },
      {
        title: "Help And Support",
        links: [
          { title: "Contact Us", url: "#" },
          { title: "Knowledge Center", url: "#" },
          { title: "Premium Support", url: "#" },
          { title: "Sponserships", url: "#" },
        ],
      },
      {
        title: "Learning",
        links: [
          { title: "Learn Hub", url: "#" },
          { title: "Manuals", url: "#" },
          { title: "Tutorials", url: "#" },
          { title: "Communities", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { title: "Third Party Tools", url: "#" },
          { title: "Illustrations", url: "#" },
          { title: "Themesberg", url: "#" },
          { title: "Blue Host", url: "#" },
          { title: "Stock Photos", url: "#" },
        ],
      },
    ],
  };
  return (
    <footer>
      <div className="max-w-screen-xl px-4 pt-4 pb-2 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {links?.map((item) => (
            <div key={item.title}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {item.title}
              </h3>
              <ul className="text-gray-500">
                {item?.links?.map((link) => (
                  <li className="mb-4" key={link.title}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="text-center">
          <Logo size="text-2xl" />
          <span className="block text-sm mt-5 text-center text-gray-500">
            {copyright}
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socials?.map((social, index) => (
              <Link
                className="text-gray-500 hover:text-gray-900"
                key={index}
                href={social.url}
              >
                {social.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
