/* eslint-disable react/prop-types */
import styles from './Navbar.module.css';

export default function Navbar(){
    return (
        <nav>
            <ul className={styles.navContainer}>
                <li>Homepage</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}