import React, { InputHTMLAttributes, forwardRef } from "react";
import classnames from "classnames";

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "lg" | "sm";
  prepend?: string | React.ReactElement;
  append?: string | React.ReactElement;
}

export const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { disabled, size, prepend, append, ...restProps } = props;

  const getClass = classnames("sj-input-wrapper", {
    [`input-size-${size}`]: true,
  });

  if ("value" in props) {
    delete restProps.defaultValue;
  }

  return (
    <div className={getClass}>
      {prepend && <div className="sj-input-group-prepend">{prepend}</div>}
      <input
        ref={ref}
        {...restProps}
        className="sj-input-inner"
        disabled={disabled}
      />
      {append && <div className="sj-input-group-append">{append}</div>}
    </div>
  );
});

Input.defaultProps = {
  size: "lg",
  width: 500,
};

export default Input;
