import Button from "../button";
import Check from "../../../icons/Check";
import "./card.module.css";
import * as types from "./types";

export default function Card({ content }: types.CardProps) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{content.title}</h3>
      <p className="font-light text-gray-500 sm:text-lg">{content.desc}</p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-black">{content.price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="mb-8 space-y-4 text-left">
        {content.features.map((feature, index) => (
          <li className="flex items-center space-x-3" key={index}>
            <Check classNames="flex-shrink-0 w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col flex-1 justify-end w-full">
        <Button classNames="w-full" value="Get Started" link="#" />
      </div>
    </div>
  );
}
