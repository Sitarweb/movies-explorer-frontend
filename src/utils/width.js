import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return { width };
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    window.addEventListener('resize', setWindowWidth(getWindowWidth()))
  }, [])

  return windowWidth;
}