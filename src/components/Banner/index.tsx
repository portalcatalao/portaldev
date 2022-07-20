import styles from "../Banner/styles.module.scss";

export default function Banner() {
  return (
    <section>
      <div className={styles.bannerContainer}>
        <div className={styles.card}>
          <p className={styles.cardHeader}>
            Transforme suas incríveis ideias em realidade
          </p>
          <p className={styles.cardBody}>
            Fazemos o site que você precisa! <br />
            Criamos para o seu negócio um site funcional e que gera resultados.
            Da ideia ao produto final, fazemos o seu produto digital guiado nas
            suas necessidades.
          </p>
          <footer>
            <button type="submit">Faça seu orçamento</button>
          </footer>
        </div>
        <img src="/images/banner.svg" alt="Imagem banner" />
      </div>
    </section>
  );
}
