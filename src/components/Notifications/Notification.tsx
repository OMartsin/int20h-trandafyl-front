import styles from "./Notification.module.css";
import { useState } from "react";

export interface NotificationInterface {
  image: string;
  firstName: string;
  lastName: string;
  title: string;
  time: string;
  text: string;
  read: boolean;
  onClick: (index: number) => void;
  onDelete: (index: number) => void;
  index?: number;
}

function Notification({
  image,
  firstName,
  lastName,
  title,
  time,
  text,
  read,
  onClick,
  onDelete,
  index,
}: NotificationInterface) {
  const [expanded, setExpanded] = useState(false);

  const handleNotificationClick = () => {
    setExpanded(!expanded);
    if (index !== undefined) {
      onClick(index);
    }
  };

  return (
    <div
      className={`${styles.container} ${read ? styles.read : styles.unread} ${
        expanded ? styles.expanded : ""
      }`}
      onClick={handleNotificationClick}
    >
      <img src={image} alt="user Avatar" />
      <div className={styles.data}>
        <div className={styles.mainInfo}>
          <p>{firstName + " " + lastName}</p>
          <p>{time}</p>
        </div>
        <p>{title}</p>
        <p>{text}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (index !== undefined) {
              onDelete(index);
            }
          }}
          className={styles.closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Notification;
