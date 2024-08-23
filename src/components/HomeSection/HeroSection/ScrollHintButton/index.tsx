"use client";

//credits to https://uiverse.io/mrhyddenn/wet-cobra-49
import React from "react";
import styles from "./ScrollHintButton.module.css";

const ScrollHintButton = () => {
    return (
        <button onClick={() => {}} tabIndex={-1} className={styles.scrolldown}>
            <div className={styles.chevrons}>
                <div className={styles.chevrondown} />
                <div className={styles.chevrondown} />
            </div>
        </button>
    );
};

export default ScrollHintButton;
