"use client";
import React, { useEffect } from "react";
import styles from "./blogNavBar.module.scss";
import Image from "next/image";
import { Icon } from "../icon/Icon";
import Link from "next/link";

export default function BlogNavBar() {
  const [hideNavBar, setHideNavBar] = React.useState(false);
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const hideAndShowNavBar = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setHideNavBar(false);
      } else {
        setHideNavBar(true);
        setIsNavExpanded(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", hideAndShowNavBar, true);
    return window.removeEventListener("scroll", hideAndShowNavBar);
  }, []);

  return (
    <nav className={hideNavBar ? styles.navBarHidden : styles.navBar}>
      <div className={styles.logoDiv}>
        <Link href="/blog">
          <Image
            className={styles.logo}
            id="logo"
            width="40"
            height="35"
            alt="Matias Stefanutti"
            src="../images/Icon2Small.png"
          />
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
          {/* <li> Home </li> */}
          <li>
            {" "}
            <a href="/#about">About me</a>{" "}
          </li>
          <li>
            {" "}
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <Icon size="large" icon="menu"></Icon>
      </button>
    </nav>
  );
}
