import { useState } from "react";
import styles from "./ChatSidebar.module.css";

export interface ChatProps {
  firstName?: string;
  lastName?: string;
  groupName?: string;
  message: string;
  image?: string;
}

interface ChatSidebarProps {
  chats: ChatProps[];
}

function ChatSidebar({ chats }: ChatSidebarProps) {
  const [chatType, setChatType] = useState<string>("all");

  const setChat = (type: string) => {
    setChatType(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p
          className={chatType === "all" ? styles.selected : ""}
          onClick={() => setChat("all")}
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Усі
        </p>
        <p
          className={chatType === "personal" ? styles.selected : ""}
          onClick={() => setChat("personal")}
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Особисті
        </p>
      </div>
      <div className={styles.chatsContainer}>
        {chats.map((chat, index) => (
          <div key={index} className={styles.chatItem}>
            <img
              src={chat.image}
              alt="profile"
              className={styles.profileImage}
            />
            {chat.firstName && chat.lastName && (
              <p className={styles.chatName}>
                {chat.firstName} {chat.lastName}
              </p>
            )}
            {chat.groupName && (
              <p className={styles.chatName}>{chat.groupName}</p>
            )}
            <p className={styles.chatMessage}>{chat.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
