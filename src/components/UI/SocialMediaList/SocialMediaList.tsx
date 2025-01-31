import React from "react";
import styled from "./SocialMediaList.module.css";
import { SocialMediaListProps } from "@/utils/types";

export const SocialMediaList: React.FC<SocialMediaListProps> = ({ data }) => {
  return (
    <ul className={styled.soc__list}>
      {data.map((item) => (
        <li key={item.id} className={styled.soc__item}>
          <a href="#" className={styled.soc__link}>
            <img src={item.img} className={styled.soc__img} />
          </a>
        </li>
      ))}
    </ul>
  );
};
