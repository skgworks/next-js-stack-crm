import * as types from "./types";

const Quote = ({ classNames }: types.Props) => {
  return (
    <svg
      width={48}
      height={45}
      viewBox="0 0 48 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="M28.034 36V21.218C28.034 9.81 35.496 2.078 46 0l1.99 4.302C43.126 6.136 40 11.578 40 16h8v20H28.034ZM0 36V21.218C0 9.81 7.496 2.076 18 0l1.992 4.302C15.126 6.136 12 11.578 12 16h7.966v20H0Z"
        fill="#9CA3AF"
      />
    </svg>
  );
};
export default Quote;
