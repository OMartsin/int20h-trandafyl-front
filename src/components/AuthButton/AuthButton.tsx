import styles from "./AuthButton.module.css";
import { SERVER_URL } from "../../const";
import { useNavigate } from "react-router-dom";

function AuthButton() {
  const navigate = useNavigate();
  const handleSignIn = async () => {

    try {
      const response = await fetch(SERVER_URL + "car", {
        method: "GET",
        redirect: "follow",
        credentials: "include",
      }).then((response) => response);

      if (response.redirected) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error("Error during login", error);
    }
    const response = await fetch(SERVER_URL + "students/", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
      console.log(data);
      navigate("/profile");

};
return (
  <button className={styles.button}>
    <div className={styles.container} onClick={handleSignIn}>
      <img src="google.png" alt="google" className={styles.image} />
      <p className={styles.text}>Продовжити з Google</p>
    </div>
  </button>
);

}


export default AuthButton;
