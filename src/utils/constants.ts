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