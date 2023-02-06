import { useAppDispatch } from "../hooks/common/useRedux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAppSelector } from "../hooks/common/useRedux";
import { setUser } from "../redux/user/reducer";
import { selectLoggedIn } from "../redux/user/selectors";
import { useEffect } from "react";
import RenderIf from "../components/render-if";
import Landing from "../components/landing";
import Home from "../components/Home";
import Theme from "../components/Theme";

export default function Renderer() {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useUser();
  const loggedIn = useAppSelector((state) => selectLoggedIn(state));
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);
  return (
    <>
      <RenderIf condition={!loggedIn}>
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
