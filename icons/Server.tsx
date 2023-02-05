import * as types from "./types";

const Server = ({ classNames }: types.Props) => {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 12a4.8 4.8 0 0 1 4.8-4.8h28.8a4.8 4.8 0 0 1 4.8 4.8v4.8a4.8 4.8 0 0 1-4.8 4.8H9.6a4.8 4.8 0 0 1-4.8-4.8V12Zm33.6 2.4a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.801 0ZM4.8 31.2a4.8 4.8 0 0 1 4.8-4.8h28.8a4.8 4.8 0 0 1 4.8 4.8V36a4.8 4.8 0 0 1-4.8 4.8H9.6A4.8 4.8 0 0 1 4.8 36v-4.8Zm33.6 2.4a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.801 0Z"
        fill="#7E3AF2"
      />
    </svg>
  );
};
export default Server;
