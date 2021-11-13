import React from 'react';

import styles from "./Button.module.scss";

export default function Button ({ title }) {
  return (
    <div className={styles.button}>
      <span>{title}</span>
    </div>
  );
}
