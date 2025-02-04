import React, { HTMLAttributes } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import styles from './Header.module.css'
import logo from '../../../assets/logo.svg'
import arrow from '../../../assets/arrow.svg'
import help from '../../../assets/help.svg'
import { Button } from "../Button/Button.tsx"
import { headerNavList, PATH } from "../../../utils/constants.ts";
import { logOut } from "../../../utils/utils.tsx";

type HeaderProps = HTMLAttributes<HTMLHeadElement> & {
  isAuth: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isAuth }) => {
  const location = useLocation()
  const navigate = useNavigate();

  const loginButtonHandler = () => {
    if (isAuth) {
      logOut()
    } else {
      navigate(PATH.SIGNUP)
    }
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link to={PATH.HOME}><img src={logo} /></Link>
        <ul className={styles.nav_links}>
          {
            headerNavList.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={item.path === location.pathname 
                  ? styles.nav_link_active : styles.nav_link} >
                  {item.link}
                </Link>
              </li>
            )) 
          }
        </ul>
      </nav>
      <div className={styles.header_buttons}>
        <Button className={styles.header_button} mode='btn-white' onClick={loginButtonHandler}>
          <p className={styles.button_text}>
            <img src={arrow} alt='arrow'/>
            {isAuth ? 'Sign out' : 'Sign up'}
          </p>
        </Button>
        <Button className={styles.header_button} mode='btn-violet'>
          <p className={styles.button_text}>
            <img src={help} alt='help' />
            Help
          </p>
        </Button>
      </div>
    </header>
  )
};
    