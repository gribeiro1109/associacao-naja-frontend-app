// components/Footer.tsx
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        © {new Date().getFullYear()} Associação — Desenvolvido por Gabriel Ribeiro
      </div>
    </footer>
  );
}
