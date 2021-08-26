import Link from "next/Link";
import styles from "../styles/Header.module.css";
import { Navbar, Button } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
      setIsOpen(!isOpen)
  };
  
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a className={styles.navlogo}>[BrandLogo]</a>
        <ul
          className={
            isOpen === true
              ? styles.navmenu + " " + styles.active
              : styles.navmenu
          }
        >
          <li className={styles.navitem}>
            <a className={styles.navlink}>Home</a>
          </li>
          <li className={styles.navitem}>
            <a className={styles.navlink}>About</a>
          </li>
          <li className={styles.navitem}>
            <a className={styles.navlink}>Contact</a>
          </li>
        </ul>
        <button
          className={
            isOpen === true
              ? styles.hamburger + " " + styles.active
              : styles.hamburger
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}
