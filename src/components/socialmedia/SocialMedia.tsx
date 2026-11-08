import React from "react";
import styles from "./styledSocialMedia.module.scss";
import { Icon } from "../icon/Icon";

export default function SocialMedia() {
  return (
    <nav className={styles.socialMediaNav}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/matiasstefanutti/" target="blank">
            <Icon size="medium" icon="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/mstefa" target="blank">
            <Icon size="medium" icon="github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mstefanutti" target="blank">
            <Icon size="medium" icon="twitter" />
          </a>
        </li>
        <li>
          <a href="mailto:mstefanutti24@gmail.com" target="blank">
            <i className={styles.emailIcon}>
              <Icon size="medium" icon="email" />
            </i>
          </a>
        </li>
        <li>
          <div className={styles.line}></div>
        </li>
      </ul>
    </nav>
  );
}
