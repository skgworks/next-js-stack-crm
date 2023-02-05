import { useState } from "react";
import { useEffect } from "react";
const useViewport = () => {
  const [values, setValues] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const onResize = () => {
      setValues({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    window.addEventListener("load", onResize);
    window.addEventListener("resize", onResize);
    if (!values.width) onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  });

  return values;
};
export default useViewport;
