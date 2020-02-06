import React from "react";
import styles from "./loadSpinner.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloadWrapper}>
      <div className={styles.loader} />
    </div>
  );
};

export default Preloader;