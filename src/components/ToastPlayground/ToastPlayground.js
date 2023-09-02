import React, { useState, useEffect, useContext } from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";
import Toast from "../Toast";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = useContext(ToastContext);

  const [message, setMessage] = useState("");
  const [radioOption, setRadioOption] = useState(VARIANT_OPTIONS[0]);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleRadio = (event) => {
    setRadioOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createToast(message, radioOption);
    setMessage("");
    setRadioOption(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* Toast Here */}
      <ToastShelf />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                onChange={handleMessage}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((el, index) => {
                return (
                  <label key={index} htmlFor={`variant-${el}`}>
                    <input
                      id={`variant-${el}`}
                      type="radio"
                      name="variant"
                      onChange={handleRadio}
                      value={el}
                      checked={el === radioOption}
                    />
                    {el}
                  </label>
                );
              })}

              {/* TODO Other Variant radio buttons here */}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
