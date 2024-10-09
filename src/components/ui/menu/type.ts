export interface MenuItemTypes {
  text?: string;
  leftIconName?: string;
  rightIconName?: string;
  type: "divider" | "link" | "button";
  to?: string;
  onClick?: () => void;
}

export enum Positions {
  top = "bottom-full left-1/2 -translate-x-1/2 mb-1",
  topLeft = "bottom-full right-full mb-1 mr-1",
  topStart = "bottom-full left-0 mb-1",
  topRight = "bottom-full left-full mb-1 ml-1",
  topEnd = "bottom-full right-0 mb-1",
  bottom = "top-full left-1/2 -translate-x-1/2 mt-1",
  bottomStart = "top-full left-0 mt-1",
  bottomLeft = "top-full right-full mt-1 mr-1",
  bottomEnd = "top-full right-0 mt-1",
  bottomRight = "top-full left-full mt-1 ml-1",

  left = "right-full top-1/2 -translate-y-1/2 ml-1",
  right = "right-full top-1/2 -translate-y-1/2 mr-1",
}
