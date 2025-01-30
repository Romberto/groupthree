import {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

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
  item: FooterItemType;
  className?: string;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export type RegisterFormProps = HTMLAttributes<HTMLFormElement> & {
  mode: "singIn" | "singUp";
  className?: string;
};

export type SelectPropsType = {
  options: string[];
};

export type SubscriblePropsType = {
  className?: string;
};
