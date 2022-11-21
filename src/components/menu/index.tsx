import React, { createContext, useState } from "react";
import classnames from "classnames";
import { IMenuItemProps } from "./menu_item";
import MenuItem from "./menu_item";
import SubMenu, { ISubMenu } from "./sub_menu";

interface IMenuProps {
  defaultIndex?: string;
  className?: string;
  onSelect?: (index: string) => void;
  children: React.ReactNode;
  type?: "horizontal" | "vertical";
  defaultOpenSubMenus?: string[];
}

export interface IProps {
  name: string;
}

export interface IContext {
  onSelect?: (index: string) => void;
  selectedIndex: string;
  type?: "horizontal" | "vertical";
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IContext>({ selectedIndex: "0" });

export const Menu: React.FC<IMenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    onSelect,
    children,
    type,
    defaultOpenSubMenus,
  } = props;
  const [curIndex, setIndex] = useState<string>(
    defaultIndex ? defaultIndex : "0"
  );

  const aaa = () => {
    let b = [12, 3];
    console.log(...b);
  };
  aaa();

  const a: IProps = { name: "hhhhh" };

  console.log(a.name);

  const classes = classnames("sj-menu", className, {
    "menu-vertical": type === "vertical",
    "menu-horizontal": type !== "vertical",
  });

  const contextValue: IContext = {
    onSelect: handleClick,
    selectedIndex: curIndex,
    type,
    defaultOpenSubMenus,
  };

  function handleClick(index: string) {
    setIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  }

  const renderChild = () => {
    return React.Children.map(children, (child, index) => {
      let childCopy = child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childCopy.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childCopy, {
          index: index.toString(),
        });
      } else {
        console.error("请输入一个menuitem元素！");
      }
    });
  };

  return (
    <MenuContext.Provider value={contextValue}>
      <ul className={classes}>{renderChild()}</ul>
    </MenuContext.Provider>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  type: "horizontal",
  defaultOpenSubMenus: [],
};

type IMenu = React.FC<IMenuProps> & {
  SubMenu: React.FC<ISubMenu>;
  Item: React.FC<IMenuItemProps>;
};

let MenuCopy = Menu as IMenu;

MenuCopy.SubMenu = SubMenu;
MenuCopy.Item = MenuItem;

export default MenuCopy;
