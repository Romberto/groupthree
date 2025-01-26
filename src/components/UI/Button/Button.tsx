import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "btn-violet" | "btn-white" | "btn-round-rigth";
  className?:string,
}

const Button: React.FC<ButtonProps> = ({ children, mode, className = "", ...rest }) => {
    return (
      <button
        {...rest}
        className={`${mode === "btn-violet" 
          ? styles.btn_violet 
          : mode === "btn-white" 
          ? styles.btn_white 
          : styles.btn_round_right} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;