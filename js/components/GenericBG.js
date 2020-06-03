import React, { useEffect, useState } from "react";
import cn from "classnames";

import Body from "./Body.js";
import styles from "./GenericBG.module.scss";
require("../style/body.scss");

export default function GenericBG() {

  const [ cursorState, setCursorState ] = useState({clientY: 100, clientX: 100});
  const [ clickState, setClickState ] = useState(false);
  const [ cursorColor, setCursorColor ] = useState("");

  useEffect(() => {
    const mouseMove = ({ clientX, clientY }) => setCursorState({clientY, clientX});
    const mouseDown = () => setClickState(true);
    const mouseUp = () => setClickState(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    }
  }, [setCursorState, setClickState]);

  const { clientY, clientX } = cursorState;
  const style = { top: clientY-28, left: clientX-28 };

  return (
    <div className={cn(cursorColor)}>
      <div className={styles.header}>
        Custom Cursor Example Site
      </div>
      <Body change={setCursorColor} />
      <div style={style} className={cn("cursor", {clicked: clickState})}>
        <ul><li/><li/><li/><li/></ul>
      </div>
    </div>
  );
}
