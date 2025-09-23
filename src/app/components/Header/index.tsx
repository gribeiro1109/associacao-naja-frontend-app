import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandInner}>
            <Image
              src="/images/naja_logo.jpeg"
              alt="Associação Naja"
              width={48}
              height={48}
              priority
            />
            <span className={styles.brandText}>Associação Naja</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={styles.link} href="/sobre">Sobre</Link>
          <Link className={styles.link} href="/treinos">Treinos</Link>
          <Link className={styles.link} href="/eventos">Eventos</Link>
          <Link className={styles.link} href="/contato">Contato</Link>
          <Link className={styles.cta} href="/associar">Torne-se Membro</Link>
        </nav>
      </div>
    </header>
  );
}
