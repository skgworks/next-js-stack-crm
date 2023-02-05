import Link from "next/link";
import { useState } from "react";

import * as types from "./types";
import Accordion from "./Accordion";

export default function FAQ() {
  const data = {
    title: "Frequently asked questions",
    faqs: [
      {
        title: "Can I use FlowBite in open-source projects?",
        content: (
          <>
            <p className="mb-2 text-gray-500">
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.
            </p>
            <p className="text-gray-500 mb-2">
              With that being said, feel free to use this design kit for your
              open-source projects.
            </p>
            <p className="text-gray-500">
              Find out more information by{" "}
              <Link
                className="text-base font-medium text-cst-purple-600"
                href="#"
              >
                reading the license.
              </Link>
            </p>
          </>
        ),
      },
      {
        title: "Where can I access my download files?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
      {
        title: "Can I use FlowBite for commercial purposes?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
      {
        title: "What about browser support?",
        content: (
          <p className="text-base font-normal text-cst-grey-500">
            No Content Until Now
          </p>
        ),
      },
    ],
  };
  // Fetch Contents
  const { title, faqs } = data;

  //Store Active Accordion
  const [active, setActive] = useState<number | null>(null);

  //Handle Accordion Click
  const onItemClick: types.onItemClick = (index) => {
    if (active === index) {
      setActive(null);
    }
    if (active !== index) {
      setActive(index);
    }
  };
  return (
    <div className="max-w-screen-xl px-4 pb-8 w-full lg:pb-24 lg:px-6 mx-auto">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl">
        {title}
      </h2>
      {faqs.map((item, index) => (
        <div className="max-w-screen-md mx-auto" key={index}>
          <Accordion
            onItemClick={onItemClick}
            active={active === index}
            data={item}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
