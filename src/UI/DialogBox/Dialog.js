import React, { useState } from "react";
import styles from "./dialog.scss";

export const Dialog = ({ onClose, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`${styles.dialog} ${isOpen ? styles.open : ""}`}>
      <div className={styles.dialog_overlay} onClick={handleClose}></div>
      <div className={styles.dialog_content}>{children}</div>
      {/* <div className={styles.dialog_close_btn} onClick={handleClose}>
        X
      </div> */}
    </div>
  );
};
