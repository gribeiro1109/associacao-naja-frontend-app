import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div>
          © {new Date().getFullYear()} Associação Naja — Mestre Naja
        </div>
        <div style={{ marginTop: 8 }}>
          Endereço: Rua Exemplo, 123 — Contato: (12) 9 9999-9999 — email@associacaonaja.org
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: 'var(--color-muted)' }}>
          Direitos e imagens pertencem à Associação Naja.
        </div>
      </div>
    </footer>
  );
}
