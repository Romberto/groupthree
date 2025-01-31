import styled from "./Input.module.css";
import { InputProps } from "../../../utils/types";

export const Input: React.FC<InputProps> = ({
  className,
  value,
  onChange,
  ...rest
}) => {
  const InputClass = `${styled.input} ${className ? className : ""}`;
  return (
    <input
      {...rest}
      value={value}
      onChange={onChange}
      className={InputClass}
    ></input>
  );
};
