import React, { useContext, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./index";
import { IMenuItemProps } from "./menu_item";

export interface ISubMenu {
  title: string;
  children: React.ReactNode;
  index?: string;
}

export const SubMenu: React.FC<ISubMenu> = (props) => {
  const MenuVal = useContext(MenuContext);
  const { title, children, index } = props;
  const isDefaultOpened =
    index &&
    MenuVal.defaultOpenSubMenus?.indexOf(index) !== -1 &&
    MenuVal.type === "vertical";
  const [visible, setVisible] = useState(isDefaultOpened);

  const renderChild = () => {
    return React.Children.map(children, (child, childIndex) => {
      let childCopy = child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childCopy.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childCopy, {
          index: `${index}-${childIndex}`,
        });
      } else {
        console.error("请输入一个menuitem元素！");
      }
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const classes = classnames("sj-submenu", {
    "menu-opened": visible,
  });

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    setTimeout(() => {
      setVisible(toggle);
    }, 300);
  };

  const mouseEvents =
    MenuVal.type === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const clickEvents =
    MenuVal.type === "vertical"
      ? {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            setVisible(!visible);
          },
        }
      : {};

  return (
    <>
      <li className="submenu-title menu-item submenu-item" {...mouseEvents}>
        <div className="submenu-title" onClick={handleClick} {...clickEvents}>
          {title}
        </div>
        <ul className={classes}>{renderChild()}</ul>
      </li>
    </>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
