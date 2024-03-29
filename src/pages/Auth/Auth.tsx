import styles from "./Auth.module.css";
import AuthButton from "../../components/AuthButton/AuthButton";

function Auth() {
  return (
    <div className={styles.container}>
      <img src="logo.svg" height={"56px"} alt="logo" />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Просте навчання та цікаве позакласне життя
        </h1>
        <h1 className={styles.subtitle}>Усе в одному місці</h1>
      </div>
      <AuthButton />
    </div>
  );
}

export default Auth;
