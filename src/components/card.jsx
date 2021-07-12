import styles from '../styles/Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.card}>
            <h1>{props.text}</h1>
            <small>{props.subtext}</small>
        </div>
    );
}