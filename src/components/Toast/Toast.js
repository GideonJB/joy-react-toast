import React, { useEffect, useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../ToastProvider";
import styles from "./Toast.module.css";
import { useEffect } from "react";

import useKey from "../../hooks/useKey";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, radioOption, children }) {
  const { handleDismiss } = useContext(ToastContext);
  const Iconvariant = ICONS_BY_VARIANT[radioOption];

  const dismissToast = () => {
    handleDismiss(id);
  };

  useKey("Escape", () => {
    dismissToast();
  });

  return (
    <div className={`${styles.toast} ${styles[radioOption]}`}>
      <div className={styles.iconContainer}>
        <Iconvariant size={24} />
      </div>
      <VisuallyHidden>{radioOption}</VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={dismissToast}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
