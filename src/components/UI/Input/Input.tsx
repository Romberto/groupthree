import { InputHTMLAttributes } from "react";
import styled from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const InputClass = `${styled.input} ${className ? className : ''}`
  return <input {...rest} className={InputClass}></input>;
};

export default Input;
