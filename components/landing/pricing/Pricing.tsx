import Card from "./Card";

export default function Pricing() {
  const { title, description, cards } = {
    title: "Pay as you grow",
    description:
      "Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    cards: [
      {
        title: "Starter",
        desc: "Great for personal use and for your side projects.",
        price: "$49",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 1 developer",
          "Premium support: 6 months",
          "Free updates: 6 months",
        ],
      },
      {
        title: "Company",
        desc: "Best for large scale uses and extended redistribution rights.",
        price: "$99",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 10 developer",
          "Premium support: 24 months",
          "Free updates: 24 months",
        ],
      },
      {
        title: "Enterprise",
        desc: "Best for large scale uses and extended redistribution rights.",
        price: "$499",
        features: [
          "Individual configuration",
          "No setup, monthly, or hidden fees",
          "Team size: 100+ developer",
          "Premium support: 36 months",
          "Free updates: 36 months",
        ],
      },
    ],
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {cards.map((cardContent, index) => (
          <Card content={cardContent} key={index} />
        ))}
      </div>
    </div>
  );
}
