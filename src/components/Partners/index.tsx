import styles from "../Partners/styles.module.scss";

export default function Partners() {
  return (
    <section className="partners">
      <article>
        <p className={styles.header}>Empresas que confiam no nosso trabalho</p>
        <div className={styles.partners}>
          <img src="/images/partners/transduarte.png" alt="" />
          <img src="/images/partners/prefeitura-catalao.svg" alt="" />
          <img src="/images/partners/fava-sementes.png" alt="" />
          <img src="/images/partners/savana-imoveis.png" alt="" />

          <img src="/images/partners/jmk.png" alt="" />
          <img src="/images/partners/giovanni.png" alt="" />
          <img src="/images/partners/formula-r.png" alt="" />
          <img src="/images/partners/triauto.png" alt="" />
        </div>
      </article>
    </section>
  );
}
