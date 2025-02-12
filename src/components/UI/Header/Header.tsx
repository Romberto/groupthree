import { Link, useLocation, useNavigate } from "react-router";
import styles from "./Header.module.css";
import { headerNavList, PATH } from "@/utils/constants.ts";
import { logOut } from "@/utils/utils.tsx";   
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo.tsx";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { userLogOutAction } from "@/components/pages/AuthPage/AuthSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  let isAuth = useAppSelector((state) => state.authReducer.auth);


  const location = useLocation();
  const navigate = useNavigate();

  const singInHandler = () => {
    navigate(PATH.SIGNIN);
  };

  const singUpHandler = () => {
    navigate(PATH.SIGNUP);
  };

  const singOutHandler = () => {
    logOut();
    dispatch(userLogOutAction());
    
  };
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link to={PATH.HOME}>
          <Logo className={styles.header_logo} />
        </Link>
        <ul className={styles.nav_links}>
          {headerNavList.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={
                  item.path === location.pathname
                    ? styles.nav_link_active
                    : styles.nav_link
                }
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.header_buttons}>
        {!isAuth ? (
          <>
            <Button
              className={styles.header_button}
              mode="btn-white"
              onClick={singInHandler}
            >
              <p className={styles.button_text}>Sing In</p>
            </Button>
            <Button
              onClick={singUpHandler}
              className={styles.header_button}
              mode="btn-violet"
            >
              <p className={styles.button_text}>Sing Up</p>
            </Button>
          </>
        ) : (
          <Button className={styles.header_button} mode="btn-violet">
            <p className={styles.button_text} onClick={singOutHandler}>
              Sing Out
            </p>
          </Button>
        )}
      </div>
    </header>
  );
};
