// pages/index.tsx
import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Associação — Home</title>
        <meta name="description" content="Portal da Associação — cadastro, avisos e membros" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Bem-vindo à Associação</h1>
            <p className={styles.subtitle}>
              Portal para gestão de membros, avisos e notificações. Comece criando sua conta ou confira os eventos.
            </p>
            <div className={styles.actions}>
              <a href="/cadastro" className={styles.primary}>Criar conta</a>
              <a href="/membros" className={styles.secondary}>Ver membros</a>
            </div>
          </div>

          <aside className={styles.card}>
            <h3 className={styles.cardTitle}>Próximos eventos</h3>
            <ul className={styles.eventList}>
              <li>Assembleia Geral — 12/out/2025</li>
              <li>Palestra: História da Associação — 25/out/2025</li>
            </ul>
          </aside>
        </section>

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Funcionalidades</h2>
          <div className={styles.grid}>
            <div className={styles.feature}>Cadastro de Membros<p className={styles.featureDesc}>Formulário para novos ingressantes e edição de perfil.</p></div>
            <div className={styles.feature}>Notificações<p className={styles.featureDesc}>Alerta de mensalidade e eventos importantes.</p></div>
            <div className={styles.feature}>Mural<p className={styles.featureDesc}>Avisos públicos e comunicados da diretoria.</p></div>
            <div className={styles.feature}>Histórico<p className={styles.featureDesc}>Registro de mérito/demérito dos membros.</p></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
