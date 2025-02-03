import React, { HTMLAttributes } from "react";
import styles from "./Header.module.css";
import { Button } from "../Button/Button";
import logo from "@/assets/logo.svg";
import arrow from "@/assets/arrow.svg";
import help from "@/assets/help.svg";

type NavList = "home" | "search" | "favorites";
const headerNavList: NavList[] = ["home", "search", "favorites"];

type HeaderProps = HTMLAttributes<HTMLHeadElement> & {
  isAuth: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isAuth }) => (
  <header className={styles.header}>
    <nav className={styles.header_nav}>
      <a href="#">
        <img src={logo} />
      </a>
      <ul className={styles.nav_links}>
        {headerNavList.map((item, index) => (
          <li key={index}>
            <a className={styles.nav_link} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className={styles.header_buttons}>
      <Button className={styles.header_button} mode="btn-white">
        <p className={styles.button_text}>
          <img src={arrow} alt="arrow" />
          {isAuth ? "Sign out" : "Sign up"}
        </p>
      </Button>
      <Button className={styles.header_button} mode="btn-violet">
        <p className={styles.button_text}>
          <img src={help} alt="help" />
          Help
        </p>
      </Button>
    </div>
  </header>
);
