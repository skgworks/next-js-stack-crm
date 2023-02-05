import Quote from "../../../icons/Quote";

export default function Testimonials() {
  const { comment, user } = {
    comment:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    user: {
      name: "Micheal Gough",
      img: "/images/landing-testimonial.svg",
      position: "CEO at Google",
    },
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <Quote classNames="h-12 mx-auto mb-3 text-gray-400" />
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl">
              {comment}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img className="w-6 h-6 rounded-full" src={user.img} alt="User" />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <p className="pr-3 font-medium text-gray-900">{user.name}</p>
              <p className="pl-3 text-sm font-light text-gray-500">
                {user.position}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
