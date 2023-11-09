import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((prev) => !prev);
  };

  console.log(show);

  return (
    <>
      <nav className={` ${styles.navbarLeft}  ${show ? styles.navbar : ""}`}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Register</button>
          </li>
        </ul>
      </nav>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <button onClick={showMenu}>Show</button>
    </>
  );
};
