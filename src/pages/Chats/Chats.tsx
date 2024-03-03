import styles from "./Chats.module.css";
import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import { ChatProps } from "../../components/ChatSidebar/ChatSidebar";
import Chat from "../../components/Chat/Chat";

const mockChats: ChatProps[] = [
  {
    firstName: "John",
    lastName: "Doe",
    message: "Hey there!",
    image: "john_profile_pic.jpg",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    message: "Hi!",
    image: "jane_profile_pic.jpg",
  },
  {
    groupName: "Project Team",
    message: "Discussing project updates",
    image: "project_team_icon.jpg",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    message: "Meeting at 2 PM",
    image: "alice_profile_pic.jpg",
  },
  {
    groupName: "Study Group",
    message: "Preparing for exams",
    image: "study_group_icon.jpg",
  },
];

function Chats() {
  return (
    <div className={styles.container}>
      <ChatSidebar chats={mockChats} />
      <Chat />
    </div>
  );
}

export default Chats;
