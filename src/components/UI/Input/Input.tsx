import { InputHTMLAttributes,  ChangeEvent} from "react";
import styled from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input: React.FC<InputProps> = ({ className, value, onChange, ...rest }) => {
  const InputClass = `${styled.input} ${className ? className : ''}`
  return <input {...rest} value={value} onChange={onChange} className={InputClass}></input>;
};


