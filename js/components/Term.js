import React from "react"
import cn from "classnames";

export default function Term ({ color, change, term }) {
  const on = () => change(color);
  const off = () => change("");

  return (
    <span className={cn("term", color)} onMouseEnter={on} onMouseLeave={off}>
      { term }
    </span>
  );
}
