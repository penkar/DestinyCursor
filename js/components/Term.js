import React from "react"

import styles from "./Term.module.scss";

export default function Term ({ color, change, term }) {
  const on = () => change(color);
  const off = () => change("");

  return (
    <span className={styles[color]} onMouseEnter={on} onMouseLeave={off}>
      { term }
    </span>
  );
}
