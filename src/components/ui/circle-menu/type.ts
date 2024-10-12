export interface CircleMenuItem {
  to: string;
  iconName: string;
}

export type CircleMenuItems = [
  CircleMenuItem,
  CircleMenuItem,
  CircleMenuItem,
  CircleMenuItem
];

export interface CircleMenuProps {
  items: CircleMenuItems;
  menuIconName?: string;
  position?: "bottomLeft" | "bottomRight";
}
