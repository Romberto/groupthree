import React from "react";
import styled from "./FooterItem.module.css";
import { FooterItemProps } from "@/utils/types";

export const FooterItem: React.FC<FooterItemProps> = ({ className, item }) => {
  let title: string = "";
  let links: string[] = [];
  try {
    title = Object.keys(item)[0];
    links = Object.values(item)[0];
  } catch (error) {
    console.log(error);
  }

  const FooterItemClass = `${styled.footer__item} ${
    className ? className : ""
  }`;
  return (
    <div className={FooterItemClass}>
      <h3 className={styled.footer__item_title}>{title}</h3>
      <ul className={styled.footer__item_list}>
        {links.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
