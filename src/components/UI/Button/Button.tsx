import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: "btn-violet" | "btn-white" | "btn-round-rigth";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  mode,
  className,
  ...rest
}) => {
  const btnClass = `${
    mode === "btn-violet"
      ? styles.btn_violet
      : mode === "btn-white"
      ? styles.btn_white
      : styles.btn_round_right
  } ${className}`;
  return (
    <button {...rest} className={`${btnClass} ${className ? className : ''}`}>
      {children}
    </button>
  );
};

export default Button;
