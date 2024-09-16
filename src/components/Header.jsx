import Navbar from "./Navbar";
import styles from "./Header.module.css";
export default function Header(){
    return(
        <header>
            <h1 className={styles.header}>Header</h1>
            <Navbar/>
        </header>
    );
}