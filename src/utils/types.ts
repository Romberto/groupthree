import {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import { PATH } from './constants';

export type LogoType = {
  className?: string;
};

export type FooterPropsType = {
  className?: string;
};
export type FooterItemType = {
  [key: string]: string[];
};

export type FooterListType = FooterItemType[];

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'btn-violet' | 'btn-white' | 'btn-round-rigth';
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
  mode: 'singIn' | 'singUp';
  className?: string;
};

export type SelectPropsType = {
  options: string[];
};

export type SubscriblePropsType = {
  className?: string;
};

export type NavList = {
  link: 'home' | 'search' | 'favorites';

  path: PATH;
};

export type AuthPageProps = {
  mode: 'singIn' | 'singUp';
};

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
  containerClass?: string;
  itemClass?: string;
};

export type ArtworkCardProps = {
  id: number;
  title: string;
  artist: string;
  date: string;
  imageId: string | null;
  isFavorites: boolean;
};

export type Artwork = {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  image_id: string | null;
};

export type ProtectedRouteElementType = {
  element: JSX.Element;
};

export type LocalUserType = {
  email: string;
  password: string;
  auth: boolean;
};

export type ArtWorkItemProps = {
  id: number;
  title: string;
  date_display: string;
  artist_display: string;
  image_id: string;
};

export type FavoritesType = {
  favorites: number[];
  elements: ArtWorkItemProps[];
  isLoad: 'pending' | 'fulfilled' | 'rejected';
};

export type ArtworkFullType = {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  place_of_origin: string;
  artwork_type_title: string;
  medium_display: string;
  dimensions: string;
  main_reference_number: string;
  inscriptions: string | null;
  short_description: string | null;
  description: string | null;
  image_id: string;
  department_title: string;
  style_title: string;
  subject_titles: string[];
  publication_history?: string | null;
  catalogue_display?: string | null;
  is_public_domain: boolean;
  is_on_view: boolean;
};
