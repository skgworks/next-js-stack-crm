import * as types from "./types";

const Facebook = ({ classNames }: types.Props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="m16.035 13.125.492-3.234h-3.129V7.78c0-.914.422-1.758 1.829-1.758h1.441V3.246S15.368 3 14.137 3C11.57 3 9.883 4.582 9.883 7.395V9.89H7v3.234h2.883V21h3.515v-7.875h2.637Z"
        fill="#9CA3AF"
      />
    </svg>
  );
};
export default Facebook;
