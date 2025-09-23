// components/Header.tsx
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>Associação</Link>
        <nav className={styles.nav}>
          <Link href="/membros" className={styles.link}>Membros</Link>
          <Link href="/eventos" className={styles.link}>Eventos</Link>
          <Link href="/entrar" className={`${styles.link} ${styles.cta}`}>Entrar</Link>
        </nav>
      </div>
    </header>
  );
}
