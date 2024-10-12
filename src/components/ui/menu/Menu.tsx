import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { MenuItemType, Positions } from "./type";
import useOutsideClick from "../hooks/useOutsideClick";
import MenuItem from "./MenuItem";

type MenuProps = PropsWithChildren<{
  items: Array<MenuItemType>;
  position: Positions;
}>;

const Menu = ({ children, position, items }: MenuProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const refMenu = useRef<HTMLDivElement | null>(null);
  const outsideClick = useOutsideClick(refMenu);

  useEffect(() => {
    setToggleMenu(false);
  }, [outsideClick]);
  return (
    <div className="relative">
      <button onClick={() => setToggleMenu((value) => !value)}>
        {children}
      </button>
      {toggleMenu && (
        <div
          className={`absolute ${position} bg-white min-w-max p-2 rounded-md border border-grey`}
          ref={refMenu}
        >
          {items.map((item, index) => {
            return (
              <div key={index} onClick={() => setToggleMenu(false)}>
                <MenuItem
                  type={item.type}
                  leftIconName={item.leftIconName}
                  rightIconName={item.rightIconName}
                  onClick={item.onClick}
                  text={item.text}
                  to={item.to}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
