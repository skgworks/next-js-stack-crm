import Button from "../button";

export default function Hero() {
  const { title, description, primaryButton, secondaryButton, image } = {
    title: (
      <>
        Building digital <br />
        products & brands.
      </>
    ),
    description:
      " Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    primaryButton: {
      text: "Start 30 day free trial",
      link: "#",
    },
    secondaryButton: {
      text: "Pricing & FAQ",
      link: "#",
    },
    image: "/images/landing-hero.png",
  };

  return (
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-black leading-none tracking-tight md:text-5xl xl:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          {description}
        </p>
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Button
            value={primaryButton.text}
            classNames="w-full sm:w-auto sm:h-11"
            link={primaryButton.link}
            linkClasses="w-full sm:w-auto sm:h-11"
          />
          <Button
            value={secondaryButton.text}
            link={secondaryButton.link}
            btnType="outline"
            classNames="sm:h-11"
          />
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={image} alt="Hero Logo" />
      </div>
    </div>
  );
}
