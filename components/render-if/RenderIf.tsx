// A Simple render if, to render a component if a condition is true
import * as types from "./types";

export default function RenderIf({ condition, children }: types.Props) {
  return <>{condition ? children : null}</>;
}
