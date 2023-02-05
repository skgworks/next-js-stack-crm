import Button from "../button";

const Trail = () => {
  const { title, description, btn } = {
    title: "Start your free trial today",
    description: "Try Flowbite Platform for 30 days. No credit card required.",
    btn: { text: "Free trail for 30 days", url: "#" },
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            {description}
          </p>
          <Button
            value={btn.text}
            link={btn.url}
            linkClasses="flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};
export default Trail;
