import {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { PATH } from "./constants";

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


export type NavList = {
  link: 'home' | 'search' | 'favorites',
  path: PATH
}

export type AuthPageProps = {
  mode: "singIn" | "singUp";
}

export type FilterButtonProps = {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export type SearchBarProps = {
  placeholder: string;
};

export type SocialMediaItemType = {
  id: string;
  img: string;
};

export type SocialMediaListProps = {
  data: SocialMediaItemType[];
  className?: string

};

export type ArtworkCardProps = {
  title: string;
  artist: string;
  date: string;
  imageId: string | null;
};

export type Artwork = {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  image_id: string | null;
};

