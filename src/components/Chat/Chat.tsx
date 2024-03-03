import styles from "./Chat.module.css";

interface Message {
  id: number;
  sender: string;
  content: string;
}

const mockMessages: Message[] = [
  { id: 1, sender: "other", content: "Hello!" },
  { id: 2, sender: "me", content: "Hi there!" },
  { id: 3, sender: "other", content: "How are you doing?" },
  { id: 4, sender: "me", content: "I'm good, thanks!" },
];

function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.sender]}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} />
        <img src="send.png" alt="send" height={"16px"} />
      </div>
    </div>
  );
}

export default Chat;
