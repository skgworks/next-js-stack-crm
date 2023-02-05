import * as types from "./types";

const Globe = ({ classNames }: types.Props) => {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 43.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 0 0 0 38.4ZM10.397 19.265a14.429 14.429 0 0 1 4.589-6.495A3.596 3.596 0 0 0 18 14.4a3.6 3.6 0 0 1 3.6 3.6v1.2a4.8 4.8 0 0 0 9.6 0 4.8 4.8 0 0 1 3.655-4.663A14.345 14.345 0 0 1 38.4 24c0 .816-.067 1.62-.2 2.4H36a4.8 4.8 0 0 0-4.8 4.8v5.273A14.335 14.335 0 0 1 24 38.4v-4.8a4.8 4.8 0 0 0-4.8-4.8 4.8 4.8 0 0 1-4.8-4.8 4.8 4.8 0 0 0-4.003-4.735Z"
        fill="#7E3AF2"
        className={classNames}
      />
    </svg>
  );
};
export default Globe;
