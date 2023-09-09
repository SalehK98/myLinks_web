import userImg from "../../assets/download.png";
import styles from "../../styles/MemberCard.module.css";

export default function MemberCard() {
  return (
    <div className={styles.MemberCard}>
      <div className={styles.userImage}>
        <img src={userImg} alt="imageOfUser" />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.truncate}>
          <h2 className={styles.truncate}>John Smith</h2>
          <p className={styles.truncate}>example@gmail.com</p>
        </div>
      </div>
    </div>
  );
}