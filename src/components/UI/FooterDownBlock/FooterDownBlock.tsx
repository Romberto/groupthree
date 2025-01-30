import { Select } from "../Select/Select";
import styled from "./FooterDownBlock.module.css";

const LANGUAGES = ["English", "Deutsch", "Français", "Русский"];

export const FooterDownBlock = () => {
  return (
    <div className={styled.footer__down_block}>
      <Select options={LANGUAGES} />
      <span>© 2024 Brand, Inc.</span>
      <div> список соц сетей</div>
    </div>
  );
};
