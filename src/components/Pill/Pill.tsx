import React from "react";
import { Link } from "react-router-dom";

import { cn } from "helpers";

import styles from "./Pill.module.scss";

type PillProps = {
  text: string;
  icon?: React.ReactNode;
  isLink?: boolean;
  to?: string;
};

const Pill = ({ text, icon, isLink = false, to }: PillProps) => {
  const wrapperClassNames = cn(
    styles.pillWrapper,
    isLink ? styles.pillWrapperHover : ""
  );

  return (
    <span className={styles.pill}>
      {isLink ? (
        <Link to={to || ""} className={wrapperClassNames}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{text}</span>
        </Link>
      ) : (
        <span className={wrapperClassNames}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{text}</span>
        </span>
      )}
    </span>
  )
};

export default Pill;