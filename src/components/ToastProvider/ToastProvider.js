import React, { createContext, useState, useEffect } from "react";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastStack, setToastStack] = useState([]);

  const createToast = (message, radioOption) => {
    const id = Math.random();
    const newStack = [
      ...toastStack,
      { id: id, message: message, radioOption: radioOption },
    ];
    setToastStack((currentValue) => newStack);
  };

  const intervalDismiss = () => {
    const intervalStack = toastStack.slice(1);
    setToastStack((currentValue) => {
      return intervalStack;
    });
  };

  useEffect(() => {
    console.log("timer set");

    const timer = setInterval(() => {
      intervalDismiss();
    }, 1000 * 3);

    return () => {
      clearInterval(timer);
    };
  }, [toastStack]);

  const handleDismiss = (id) => {
    const checkingID = id;
    const newStack = toastStack.filter((obj) => obj.id !== checkingID);
    setToastStack(newStack);
    console.log(newStack);
  };

  return (
    <ToastContext.Provider
      value={{
        toastStack,
        createToast,
        handleDismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
