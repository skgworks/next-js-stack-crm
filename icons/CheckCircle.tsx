import * as types from "./types";

const CheckCircle = ({ classNames }: types.Props) => {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.5a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18.5Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 11.086 7.707 9.793a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
        fill="#7E3AF2"
      />
    </svg>
  );
};
export default CheckCircle;
