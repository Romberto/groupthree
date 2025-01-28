import React, { ChangeEvent } from "react";
import styled from "./FooterDownBlock.module.css";
import Select from "../Select/Select";


const LANGUAGES = ["English", "Deutsch", "Français", "Русский"];

const FooterDownBlock = () => {
  return (
    <div className={styled.footer__down_block}>
      <Select options={LANGUAGES}/>
      <span>© 2024 Brand, Inc.</span>
      <div> список соц сетей</div>
    </div>
  );
};

export default FooterDownBlock;
