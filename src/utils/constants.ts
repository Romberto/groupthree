import { NavList } from "./types";

export enum PATH {
  HOME = '/',
  SEARCH = '/search',
  FAVORITES = '/favorites',
  HISTORY = '/hitory',
  SIGNIN = '/sign-in',
  SIGNUP = '/sign-up'
}

export enum APIPATH{
  ENDPOINT = 'https://api.artic.edu/api/v1/artworks',
  GETPAGE = "&limit=12&page=",
  GETFIELDS = "?fields=id,title,artist_display,date_display,description,image_id,date_endl",
}

export const LOCALUSER = 'User'

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

import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";
import youtube from "@/assets/youtube.svg";
import { SocialMediaItemType } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";

const idFaceBook: string = uuidv4();
const idTwitter: string = uuidv4();
const idInstagram: string = uuidv4();
const idLinkedIn: string = uuidv4();
const idYouTube: string = uuidv4();
export const SOCIALLIST: SocialMediaItemType[] = 
   [
    { id: idFaceBook, img: facebook },
    { id: idTwitter, img: twitter },
    { id: idInstagram, img: instagram },
    { id: idLinkedIn, img: linkedin },
    { id: idYouTube, img: youtube },
  ]
;

export const LANGUAGES = ["English", "Deutsch", "Français", "Русский"];

