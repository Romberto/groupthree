import React from "react"
import styled from './SocialMediaList.module.css'
import { v4 as uuidv4 } from "uuid";

export type SocialMediaItemType = {
    id: string,
    img: string,
}

export type SocialMediaListType = {
    data: SocialMediaItemType[]
}



export const SocialMediaList:React.FC<SocialMediaListType> = (props) => {
  return (
    <div>
      
    </div>
  )
};

