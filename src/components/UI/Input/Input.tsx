import { InputHTMLAttributes } from "react";
import styled from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
  return <input {...rest} className={`${styled.input} ${className}`}></input>;
};

export default Input;
