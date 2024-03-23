import { useEffect, useRef } from "react";

const useClickOutside = (handler, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    //CLEANUP
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [ref, handler, listenCapturing]);

  return ref;
};

export default useClickOutside;
