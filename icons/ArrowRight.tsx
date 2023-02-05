import * as types from "./types";

const ArrowRight = ({ classNames }: types.Props) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path d="M14 8H2h12Z" fill="#7E3AF2" />
      <path
        d="M9.333 3.333 14 8m0 0-4.667 4.667M14 8H2"
        stroke="#7E3AF2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ArrowRight;
