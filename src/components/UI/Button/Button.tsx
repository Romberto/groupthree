import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode: "btn-violet" | "btn-white" | "btn-round-rigth";
}

const Button = (props: ButtonProps, { ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        props.mode === "btn-violet"
          ? styles.btn_violet
          : props.mode === "btn-white"
          ? styles.btn_white
          : styles.btn_round_right
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
