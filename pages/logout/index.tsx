import { useAppDispatch } from "../../hooks/common/useRedux";
import { logout } from "../../redux/user/reducer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(logout());
    router.push("/");
  }, [dispatch, router]);

  dispatch(logout());
  return <>Logging you out...</>;
}
