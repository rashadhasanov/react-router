import React from "react";
import { useEffect } from "react";

function Overlay({ active }) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return <div className="overlay"></div>;
}

export default Overlay;
