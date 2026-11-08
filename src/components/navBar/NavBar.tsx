"use client";
import React, { useEffect } from "react";
import styles from "./navBar.module.scss";
import { Icon } from "../icon/Icon";
import { LogoHexM } from "../logo/LogoHexM";
import Link from "next/link";

export default function NavBar() {
  const [hideNavBar, setHideNavBar] = React.useState(false);
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const hideAndShowNavBar = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setHideNavBar(false);
      } else {
        setHideNavBar(true);
        setIsNavExpanded(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", hideAndShowNavBar, true);
    return () => window.removeEventListener("scroll", hideAndShowNavBar, true);
  }, []);

  return (
    <nav className={hideNavBar ? styles.navBarHidden : styles.navBar}>
      <div className={styles.logoDiv}>
        <Link href="/" aria-label="Matías Stefanutti Home">
          <LogoHexM size={44} className={styles.logo} />
        </Link>
      </div>

      <div
        className={
          isNavExpanded
            ? styles.navigationMenuExpanded
            : styles.navigationMenuHiden
        }
      >
        <ul>
          <li>
            <Link href="/#about">About me</Link>
          </li>
          <li>
            <Link href="/#jobs">Work</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <button
        className={styles.hamburger}
        aria-label="Toggle navigation menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <Icon size="large" icon="menu"></Icon>
      </button>
    </nav>
  );
}
