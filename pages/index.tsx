import { useAppSelector } from "../hooks/common/useRedux";
import { selectLoggedIn } from "../redux/user/selectors";
import RenderIf from "../components/render-if";
import Landing from "../components/landing";
import Home from "../components/Home";

export default function Renderer() {
  const loggedIn = useAppSelector((state) => selectLoggedIn(state));

  return (
    <>
      <RenderIf condition={!loggedIn}>
        <Landing />
      </RenderIf>
      <RenderIf condition={!!loggedIn}>
        <Home />
      </RenderIf>
    </>
  );
}
