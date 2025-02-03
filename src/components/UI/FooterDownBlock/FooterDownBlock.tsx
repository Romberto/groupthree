import { Select } from "../Select/Select";
import styled from "./FooterDownBlock.module.css";
import { SocialMediaList } from "../SocialMediaList/SocialMediaList";
import { LANGUAGES, SOCIALLIST } from "@/utils/constants";

export const FooterDownBlock = () => {
  return (
    <div className={styled.footer__down_block}>
      <Select options={LANGUAGES} />
      <span>© 2024 Brand, Inc.</span>
      <SocialMediaList data={SOCIALLIST}/>
    </div>
  );
};
