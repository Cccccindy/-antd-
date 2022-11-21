import React, { useState, useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  id: "Input",
} as ComponentMeta<typeof Input>;

export const DefaultInput: ComponentStory<typeof Input> = (args) => (
  <Input placeholder="我是一个普通的input" {...args} />
);

DefaultInput.storyName = "默认输入框样式";

export const Secondary = DefaultInput.bind({});
Secondary.args = {
  size: "sm",
  placeholder: "我是一个小input",
};

Secondary.storyName = "尺寸不同的input";

export const thirdary = DefaultInput.bind({});
thirdary.args = {
  disabled: true,
  placeholder: "我是一个不可用的input",
};

thirdary.storyName = "不可操作";

export const pend = DefaultInput.bind({});
pend.args = {
  prepend: "https://",
  placeholder: "我是一个带前缀的input",
};

pend.storyName = "带前后缀的input";

const ControlledInput = () => {
  const ref = useRef<null | HTMLInputElement>(null);
  return (
    <Input
      ref={ref}
      onChange={() => {
        alert(ref?.current?.value);
      }}
    />
  );
};
export const controlledInput: ComponentStory<typeof Input> = () => (
  <ControlledInput />
);
