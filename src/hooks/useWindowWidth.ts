import { useEffect, useState } from "react";

function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function onWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
