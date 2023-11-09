import styles from "./Card.module.css";

import React, { useState } from "react";

export const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.figure}></div>
      <h1 className={styles.title}>Title</h1>
      <div>
        <button
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          className={styles.button}
        >
          -
        </button>
        <span className={styles.counter}>{count}</span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className={styles.button}
        >
          +
        </button>
      </div>
    </div>
  );
};
