import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header id={styles.headerContainer}>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/loja">Loja</Link>
            </nav>
        </header>
    )
}