import Link from "next/Link";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo}>[BrandLogo]</a>
        </Link>
        <ul
          className={
            isOpen === true
              ? styles.navmenu + " " + styles.active
              : styles.navmenu
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a className={styles.navlink}>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/posts">
              <a className={styles.navlink}>Blogs</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/about">
              <a className={styles.navlink}>About</a>
            </Link>
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
