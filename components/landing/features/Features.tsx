import * as types from "./types";
import RenderIf from "../../render-if";
import FeatureContent from "./FeatureContent";

export default function Features() {
  const data: types.Data = [
    {
      title: "Work with tools you already use",
      description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      features: [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management",
      ],
      footerText:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
      image: { src: "/images/landing-tools.png", alt: "tools" },
    },
    {
      title: "We invest in the world's potential",
      description:
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      features: [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow",
        "Limitless business automation",
        "Knowledge management",
      ],
      image: { src: "/images/landing-potential.png", alt: "Our Potential" },
    },
  ];
  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {data.map(({ image, ...rest }, index) => (
          <div
            className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
            key={index}
          >
            <RenderIf condition={!(index % 2)}>
              <FeatureContent margin data={rest} />
            </RenderIf>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={image?.src}
              alt={image?.alt}
            />
            <RenderIf condition={!!(index % 2)}>
              <FeatureContent data={rest} />
            </RenderIf>
          </div>
        ))}
      </div>
    </div>
  );
}
