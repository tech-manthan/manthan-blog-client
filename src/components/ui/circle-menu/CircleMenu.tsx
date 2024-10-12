import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { CircleMenuProps } from "./type";

const CircleMenu = ({
  items,
  menuIconName,
  position = "bottomRight",
}: CircleMenuProps) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const clickedOutside = useOutsideClick(menuRef);

  useEffect(() => {
    setMenuClicked(false);
  }, [clickedOutside]);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-0 right-0 min-w-max md:hidden z-10"
    >
      <div
        className={`clip-circle-sector-left absolute bottom-0 ${
          position === "bottomRight" ? "right-0" : "left-0"
        } opacity-0 ${menuClicked && "opacity-100"} ${
          position === "bottomLeft" && "clip-circle-sector-right"
        }  w-[160px] h-[160px] transition-opacity`}
      >
        <Link
          to={items[0].to}
          className={`absolute bg-white ${
            position === "bottomLeft" ? "left-[1rem]" : "right-[1rem]"
          } top-[1.5rem] w-10 h-10 flex justify-center items-end rounded-full border shadow-md hover:bg-grey`}
        >
          <i className={`fi fi-rr-${items[0].iconName} text-2xl`}></i>
        </Link>
        <Link
          to={items[1].to}
          className={`absolute bg-white ${
            position === "bottomLeft" ? "left-[3.8rem]" : "right-[3.8rem]"
          }  top-[2.8rem] w-10 h-10 flex justify-center items-end rounded-full border shadow-md hover:bg-grey`}
        >
          <i className={`fi fi-rr-${items[1].iconName} text-2xl`}></i>
        </Link>

        <Link
          to={items[2].to}
          className={`absolute bg-white ${
            position === "bottomLeft" ? "left-[6.125rem]" : "right-[6.125rem]"
          }  top-[5.125rem] w-10 h-10 flex justify-center items-end rounded-full border shadow-md hover:bg-grey`}
        >
          <i className={`fi fi-rr-${items[2].iconName} text-2xl`}></i>
        </Link>

        <Link
          to={items[3].to}
          className={`absolute bg-white ${
            position === "bottomLeft" ? "left-[7.5rem]" : "right-[7.5rem]"
          }  top-[8rem] w-10 h-10 flex justify-center items-end rounded-full border shadow-md hover:bg-grey`}
        >
          <i className={`fi fi-rr-${items[3].iconName} text-2xl`}></i>
        </Link>
      </div>

      <div
        className={`fixed bottom-4 ${
          position === "bottomRight" ? "right-4" : "left-4"
        }  z-20`}
      >
        <button
          onClick={() => setMenuClicked((value) => !value)}
          className={`bg-white border hover:bg-grey w-10 h-10 p-4 flex justify-center items-center rounded-full z-20 transition-all shadow-md`}
        >
          <i
            className={`fi fi-rr-${
              menuIconName ? menuIconName : "grid"
            } text-xl`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CircleMenu;
