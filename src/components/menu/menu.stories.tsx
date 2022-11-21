import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Menu",
  component: Menu,
  id: "Menu",
  subcomponents: { SubMenu: Menu.SubMenu, Item: Menu.Item },
} as ComponentMeta<typeof Menu>;

export const DefaultMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="下拉选项">
      <Menu.Item>下拉选项一</Menu.Item>
      <Menu.Item>下拉选项二</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

DefaultMenu.storyName = "默认菜单样式";

export const Secondary = DefaultMenu.bind({});
Secondary.args = {
  type: "vertical",
};

Secondary.storyName = "垂直菜单样式";

export const Thirdary = DefaultMenu.bind({});
Thirdary.args = {
  type: "vertical",
  defaultOpenSubMenus: ["3"],
};

Thirdary.storyName = "默认展开菜单";
