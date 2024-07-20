import React, { useEffect } from "react";
import { Notification } from "@mantine/core";

const Toast = ({
  message,
  show,
  onHide,
  color,
  isPersistant = false,
  isLoading = false,
}) => {
  useEffect(() => {
    if (!isPersistant) {
      const timeout = setTimeout(() => {
        onHide();
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPersistant]);

  if (show) {
    return (
      <Notification
        color={isLoading ? "" : color}
        loading={isLoading}
        withBorder
        w={"20rem"}
        withCloseButton={false}
        title={message}
      ></Notification>
    );
  } else {
    return "";
  }
};

export default Toast;
