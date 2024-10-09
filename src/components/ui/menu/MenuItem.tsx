import { MenuItemType } from "./type";
import Divider from "../divider/Divider";
import { Link } from "react-router-dom";

type ItemProps = {
  text: string;
  leftIconName?: string;
  rightIconName?: string;
};
const Item = ({ leftIconName, rightIconName, text }: ItemProps) => {
  return (
    <div className="min-w-40 flex gap-x-4 p-2 px-3 rounded-md hover:bg-grey">
      {leftIconName && <i className={`fi fi-rr-${leftIconName} text-xl`}></i>}
      <p className="text-xl">{text}</p>
      {rightIconName && <i className={`fi fi-rr-${rightIconName} text-xl`}></i>}
    </div>
  );
};

const MenuItem = ({
  type,
  leftIconName,
  rightIconName,
  onClick,
  text,
  to,
}: MenuItemType) => {
  return type === "divider" ? (
    <Divider />
  ) : type == "link" ? (
    <Link to={to as string}>
      <Item
        text={text!}
        leftIconName={leftIconName}
        rightIconName={rightIconName}
      />
    </Link>
  ) : (
    <button onClick={onClick}>
      <Item
        text={text!}
        leftIconName={leftIconName}
        rightIconName={rightIconName}
      />
    </button>
  );
};

export default MenuItem;
