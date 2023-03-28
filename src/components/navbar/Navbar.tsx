import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import { menuItems } from "./MenuItems";
import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink text={text} href={href} key={text} />
      ))}
    </nav>
  );
};
