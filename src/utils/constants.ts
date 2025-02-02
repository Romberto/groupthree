import { NavList } from "./types";

export enum PATH {
  HOME = '/',
  SEARCH = '/search',
  FAVORITES = '/favorites',
  HISTORY = '/hitory',
  SIGNIN = '/sign-in',
  SIGNUP = '/sign-up'
}

export const headerNavList: NavList[] = [
  {
    link: 'home',
    path: PATH.HOME
  },
  {
    link: 'search',
    path: PATH.SEARCH
  },
  {
    link: 'favorites',
    path: PATH.FAVORITES
  }
]