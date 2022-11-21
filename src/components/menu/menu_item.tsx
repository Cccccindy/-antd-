import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext, IContext } from "./index";

export interface IMenuItemProps {
  index?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { index, className, children, disabled } = props;
  const MenuVal = useContext<IContext>(MenuContext);
  console.log(MenuVal);

  const classes = classnames("menu-item", className, {
    "is-active": index === MenuVal.selectedIndex,
    "is-disabled": disabled,
  });

  function handleClick() {
    if (MenuVal.onSelect && !disabled && typeof index === "string") {
      MenuVal.onSelect(index);
    }
  }
  return (
    <li className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
