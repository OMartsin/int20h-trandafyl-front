import styles from "./Notifications.module.css";
import { useState } from "react";

export interface NotificationInterface {
  image: string;
  firstName: string;
  lastName: string;
  title: string;
  time: string;
  text: string;
  read: boolean;
}
function calculateTimeDifference(timeString: string): string {
  const currentTime = new Date();
  const notificationTime = new Date(timeString);
  const timeDifferenceInMilliseconds =
    currentTime.getTime() - notificationTime.getTime();
  const minutes = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + "...";
}

function Notifications() {
  const [selectedNotification, setSelectedNotification] = useState<
    number | null
  >(null);
  const [notifications, setNotifications] = useState<NotificationInterface[]>([
    {
      image: "profile_pic.jpg",
      firstName: "John",
      lastName: "Doe",
      title: "New Message",
      time: "2024-03-02T10:30:00",
      text: "You have a new message from Jane Doe. lest try adding a lot of text to test styles and make it look good with a large text",
      read: true,
    },
    {
      image: "profile_pic.jpg",
      firstName: "Jane",
      lastName: "Doe",
      title: "Event Reminder",
      time: "2024-03-01T15:45:00",
      text: "Don't forget about the team meeting tomorrow.",
      read: false,
    },
    {
      image: "profile_pic.jpg",
      firstName: "Alice",
      lastName: "Smith",
      title: "New Request",
      time: "2024-03-02T11:45:00",
      text: "You received a new friend request from Bob.",
      read: true,
    },
    {
      image: "profile_pic.jpg",
      firstName: "Bob",
      lastName: "Johnson",
      title: "Important Update",
      time: "2024-03-02T14:20:00",
      text: "An important update has been posted. Please check it out.",
      read: true,
    },
    {
      image: "profile_pic.jpg",
      firstName: "Eva",
      lastName: "Williams",
      title: "Birthday Reminder",
      time: "2024-03-03T09:00:00",
      text: "Don't forget, it's John's birthday today! Send your wishes.",
      read: false,
    },
    {
      image: "profile_pic.jpg",
      firstName: "David",
      lastName: "Miller",
      title: "New Task Assigned",
      time: "2024-03-03T12:30:00",
      text: "A new task has been assigned to you. Check your task list for details.",
      read: true,
    },
    {
      image: "profile_pic.jpg",
      firstName: "Emily",
      lastName: "Brown",
      title: "Congratulations!",
      time: "2024-03-04T08:15:00",
      text: "You've reached a new achievement. Congratulations on your success!",
      read: true,
    },
  ]);

  const handleNotificationClick = (index: number): void => {
    setSelectedNotification(index);
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications];
      updatedNotifications[index].read = true;
      return updatedNotifications;
    });
  };

  const handleNotificationClose = (): void => {
    setSelectedNotification(null);
  };

  const handleNotificationDelete = (index: number): void => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });

    if (selectedNotification === index) {
      setSelectedNotification(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.notificationList}>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`${styles.notificationContainer} ${
              notification.read ? styles.read : styles.unread
            }`}
            onClick={() => handleNotificationClick(index)}
          >
            <div className={styles.imageContainer}>
              <img
                src={notification.image}
                alt="user Avatar"
                className={styles.image}
              />
            </div>

            <div className={styles.data}>
              <div className={styles.mainInfo}>
                <p className={styles.name}>
                  {notification.firstName + " " + notification.lastName}
                </p>
                <p className={styles.time}>
                  {calculateTimeDifference(notification.time)}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNotificationDelete(index);
                  }}
                  className={styles.deleteButton}
                >
                  <img src="close.png" alt="delete" height={"12px"} />
                </button>
              </div>
              <p className={styles.title}>{notification.title}</p>
              <p className={styles.text}>
                {truncateText(notification.text, 70)}
              </p>
            </div>
            {selectedNotification === index && (
              <div>
                <p>{notification.text}</p>
                <button onClick={handleNotificationClose}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
