import React, { useEffect } from "react";

const useKey = (keyPress, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === keyPress) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useKey;
