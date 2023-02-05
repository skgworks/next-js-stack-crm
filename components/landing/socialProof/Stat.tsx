import * as types from "./types";

export default function ({ data }: types.StatProps) {
  const { title, description, icon } = data;
  return (
    <div>
      {icon}
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="font-light text-gray-500">{description}</p>
    </div>
  );
}
