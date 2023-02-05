import RenderIf from "../../render-if";
import CheckCircle from "../../../icons/CheckCircle";
import * as types from "./types";

export default function FeatureContent({
  data,
  margin,
}: types.FeatureContentProps) {
  const { title, description, features, footerText } = data;
  return (
    <div className="text-gray-500 sm:text-lg">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mb-8 font-light lg:text-xl">{description}</p>
      <ul className="pt-8 space-y-5 border-t border-gray-200 my-7">
        {features?.map((feature, index) => (
          <li key={index} className="flex space-x-3">
            <CheckCircle classNames="flex-shrink-0 w-5 h-5 text-purple-500" />
            <span className="text-base font-medium leading-tight text-gray-900">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <RenderIf condition={!!footerText}>
        <p
          className={
            margin ? "mb-8 font-light lg:text-xl" : "font-light lg:text-xl"
          }
        >
          {footerText}
        </p>
      </RenderIf>
    </div>
  );
}
