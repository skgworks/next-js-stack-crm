import * as types from "./types";
const Users = ({ classNames }: types.Props) => {
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
        d="M21.6 14.4a7.2 7.2 0 1 1-14.4 0 7.2 7.2 0 0 1 14.4 0Zm19.2 0a7.199 7.199 0 0 1-12.291 5.091A7.199 7.199 0 1 1 40.8 14.4Zm-9.768 26.4a17.2 17.2 0 0 0 .168-2.4 16.728 16.728 0 0 0-3.6-10.392 12 12 0 0 1 18 10.392v2.4H31.032ZM14.4 26.4a12 12 0 0 1 12 12v2.4h-24v-2.4a12 12 0 0 1 12-12Z"
        fill="#7E3AF2"
      />
    </svg>
  );
};
export default Users;
