import { ButtonHTMLAttributes, ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

export type FooterPropsType = {
  className?: string;
};
export type FooterItemType = {
  [key: string]: string[];
};

export type FooterListType = FooterItemType[];

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: "btn-violet" | "btn-white" | "btn-round-rigth";
  className?: string;
};

export type FooterItemProps = {
  className?: string;
  item: FooterItemType;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  };

export type RegisterFormProps = HTMLAttributes<HTMLFormElement> & {
  className?: string;
  mode: "singIn" | "singUp";
};

export type SelectPropsType = {
    options: string[];
  };

export type SubscriblePropsType = {
    className?: string;
  };
  
