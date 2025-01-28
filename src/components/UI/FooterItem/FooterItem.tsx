import React from "react";
import styled from "./FooterItem.module.css";
import { FooterItemType } from "../../pages/Footer/Footer";

type FooterItemProps = {
    className?:string,
    item: FooterItemType
}

const FooterItem:React.FC<FooterItemProps> = ({className , item}) => {
    const title = Object.keys(item)[0]
    const links = Object.values(item)[0]
    const FooterItemClass = `${styled.footer__item} ${className ? className: ''}`
  return (
        <div className={FooterItemClass}>
            <h3 className={styled.footer__item_title}>{title}</h3>
            <ul className={styled.footer__item_list}>
                {links.map((item , index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
  );
};

export default FooterItem;
