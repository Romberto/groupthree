import styles from './Header.module.css'
import Button from "../Button/Button"
import logo from '../../../assets/logo.svg'
import arrow from '../../../assets/arrow.svg'
import help from '../../../assets/help.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <img src={logo} />
        <ul className={styles.nav_links}>
          <li><a className={styles.nav_link} href="#">home</a></li>
          <li><a className={styles.nav_link} href="#">search</a></li>
          <li><a className={styles.nav_link} href="#">favorites</a></li>
        </ul>
      </nav>
      <div className={styles.header_buttons}>
        <Button mode='btn-white'>
          <img src={arrow} />
          Sign Up
        </Button>
        <Button mode='btn-violet'>
          <img src={help} />
          Help
        </Button>
      </div>
    </header>
  )
}
    