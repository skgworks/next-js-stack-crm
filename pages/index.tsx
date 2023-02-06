import { useAppSelector } from "../hooks/common/useRedux";
import { setUser } from "../redux/user/reducer";
import { selectLoggedIn } from "../redux/user/selectors";
import { useEffect } from "react";
import RenderIf from "../components/render-if";
import Landing from "../components/landing";
import Home from "../components/Home";
import Theme from "../components/Theme";

export default function Renderer() {

  const loggedIn = useAppSelector((state) => selectLoggedIn(state));

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
