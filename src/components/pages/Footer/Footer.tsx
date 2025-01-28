import React from "react"
import styled from './Footer.module.css'
import Subscribe from "../../UI/Subscribe/Subscribe";

const Footer = () => {
  return (
    <footer className={styled.footer}>
        <Subscribe/>
    </footer>
  )
};

export default Footer;
