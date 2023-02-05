import * as types from "./types";

const Cart = ({ classNames }: types.Props) => {
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
        d="M7.2 2.4a2.4 2.4 0 1 0 0 4.8h2.928l.732 2.933c.007.034.015.067.024.1l3.26 13.033L12 25.406c-3.024 3.024-.883 8.194 3.394 8.194H36a2.4 2.4 0 0 0 0-4.8H15.394l2.4-2.4H33.6a2.4 2.4 0 0 0 2.146-1.327l7.2-14.4A2.4 2.4 0 0 0 40.8 7.2H15.072l-.744-2.983A2.4 2.4 0 0 0 12 2.4H7.2Zm31.2 37.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Zm-22.8 3.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
        fill="#7E3AF2"
      />
    </svg>
  );
};
export default Cart;
