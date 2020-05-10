import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./Navigation.module.css";

interface Props {
  nextUrl?: string;
  prevUrl?: string;
}

export function Navigation({ nextUrl, prevUrl }: Props) {
  return (
    <nav>
      <ul className={styles.List}>
        {prevUrl == null ? null : (
          <li className={styles.ListItem}>
            <Link to={prevUrl}>&larr; Prev</Link>
          </li>
        )}

        {nextUrl == null ? null : (
          <li className={styles.ListItem}>
            <Link to={nextUrl}>Next &rarr;</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
