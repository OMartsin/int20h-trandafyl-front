import styles from "./AuthButton.module.css";

function AuthButton() {
  return (
    <button className={styles.button}>
      <div className={styles.container}>
        <img src="google.png" alt="google" className={styles.image} />
        <p className={styles.text}>Продовжити з Google</p>
      </div>
    </button>
  );
}

export default AuthButton;
