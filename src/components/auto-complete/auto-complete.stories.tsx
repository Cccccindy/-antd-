import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AutoComplete from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/AutoComplete",
  component: AutoComplete,
  id: "AutoComplete",
} as ComponentMeta<typeof AutoComplete>;

const options = [
  "bradley",
  "pope",
  "caruso",
  "cook",
  "cousins",
  "james",
  "AD",
  "green",
  "howard",
  "kuzma",
  "McGee",
  "rando",
];

export const DefaultAutoComplete: ComponentStory<typeof AutoComplete> = (
  args
) => (
  <AutoComplete
    options={options}
    {...args}
    onSelect={(value) => alert(value)}
    filterOption={(inputValue, option) => {
      return option.indexOf(inputValue) !== -1;
    }}
  ></AutoComplete>
);

DefaultAutoComplete.storyName = "默认完成后样式";
