import React, { ChangeEvent, useState } from "react";
import Input from "../input";

type Options = string[];

interface IProps {
  options: Options;
  filterOption?: (inputValue: string, option: string) => boolean;
  onSelect: (value: string) => void;
}

const AutoComplete: React.FC<IProps> = (props) => {
  const { options, filterOption, onSelect } = props;
  const [value, setvalue] = useState<string>("");
  const [getOptions, setGetOptions] = useState(options);
  const [visible, setVisible] = useState(false);

  const dropdownList = () => {
    return (
      <>
        {visible && (
          <ul className="sj-suggestion-list">
            {getOptions.map((item) => {
              return (
                <li
                  className="suggestion-item"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  const handleSelect = (item) => {
    setvalue(item);
    setGetOptions([item]);
    onSelect(item);
    setVisible(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setvalue(v);
    if (v) {
      setVisible(true);
    } else {
      setGetOptions([]);
      return;
    }
    let arr = [];
    options.forEach((item) => {
      const b = filterOption(v, item);
      if (b) {
        arr.push(item);
      }
    });

    setGetOptions(arr);
  };

  return (
    <div className="sj-auto-complete">
      <Input onChange={handleChange} value={value} />
      {dropdownList()}
    </div>
  );
};

export default AutoComplete;
