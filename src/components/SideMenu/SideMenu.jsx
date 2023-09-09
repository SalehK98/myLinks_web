import categories from "../../data/links.json";
import styles from "../../styles/SideMenu.module.css";
import MemberCard from "../MemberCard/MemberCard";

console.log(Object.values(categories));

export default function SideMenu() {
  return (
    <div className={styles.sidePanel}>
      <MemberCard />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(categories).map((category) => {
          return <button key={category}>{category}</button>;
        })}
      </div>
      <div>myLinks Web app 0.00</div>
    </div>
  );
}
