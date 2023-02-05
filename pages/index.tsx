import { useAppDispatch } from "../hooks/common/useRedux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAppSelector } from "../hooks/common/useRedux";
import { setLoggingIn, setUser } from "../redux/user/reducer";
import { selectLoggedIn } from "../redux/user/selectors";
import { useEffect } from "react";
import { Screen as LoadingScreen } from "../components/loading";
import RenderIf from "../components/render-if";
import Landing from "../components/landing";
import Home from "../components/Home";
import Theme from "../components/Theme";
import { selectIsLoggingIn } from "../redux/user/selectors";

export default function Renderer() {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useUser();
  const loggedIn = useAppSelector((state) => selectLoggedIn(state));
  const isLoggingIn = useAppSelector((state) => selectIsLoggingIn(state));
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      dispatch(setLoggingIn(false));
    }
  }, [user]);
  return (
    <>
      <RenderIf condition={!!isLoggingIn && !loggedIn}>
        <LoadingScreen />
      </RenderIf>
      <RenderIf condition={!loggedIn && !isLoggingIn}>
        <Landing />
      </RenderIf>
      <RenderIf condition={!!loggedIn}>
        <Theme>
          <Home />
        </Theme>
      </RenderIf>
    </>
  );
}
