import { MutableRefObject, useEffect, useState } from "react";

export default function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>
) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClicked(true);
      } else {
        setClicked(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return clicked;
}
