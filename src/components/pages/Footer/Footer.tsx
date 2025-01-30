import React from "react";
import styled from "./Footer.module.css";
import { Subscribe } from "../../UI/Subscribe/Subscribe";
import { FooterItem } from "../../UI/FooterItem/FooterItem";
import { FooterDownBlock } from "../../UI/FooterDownBlock/FooterDownBlock";
import { FooterListType, FooterPropsType } from "../../../utils/types";

const FOOTERITEMLIST: FooterListType = [
  { Product: ["Features", "Pricing"] },
  { Resources: ["Blog", "User guides", "User guides"] },
  { Company: ["About us", "Contact us"] },
  { "Plans & Pricing": ["Personal", "Start up", "Organization"] },
];

export const Footer: React.FC<FooterPropsType> = ({ className }) => {
  const footerClass = `${styled.footer} ${className ? className : ""}`;
  return (
    <footer className={footerClass}>
      <Subscribe className={styled.subscrible} />
      <ul className={styled.footer__list}>
        {FOOTERITEMLIST.map((item, index) => (
          <li key={index}>
            <FooterItem item={item} />
          </li>
        ))}
      </ul>
      <FooterDownBlock />
    </footer>
  );
};


