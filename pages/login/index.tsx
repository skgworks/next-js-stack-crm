import { Screen as LoadingScreen } from "../../components/loading";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/common/useRedux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { setUser } from "../../redux/user/reducer";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      router.push("/");
    }
  }, [user, dispatch]);
  return <LoadingScreen />;
}
