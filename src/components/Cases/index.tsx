import styles from "../Cases/styles.module.scss";

export default function Cases() {
  return (
    <div className={styles.container} id="cases">
      <section>
        <p className={styles.header}>
          Transforme suas incríveis ideias em realidade
        </p>
        <div className={styles.caseContainer}>
          <article>
            <img src="/images/cases/web.png" alt="" />
            <div className={styles.card}>
              <span>Web</span>
              <p>
                Sua necessidade hoje é um site responsivo e com um design
                moderno, único e inovador? Somos o mapa para te guiar até o
                futuro.
              </p>
            </div>
          </article>
          <article>
            <img src="/images/cases/web.png" alt="" />
            <div className={styles.card}>
              <span>Mobile</span>
              <p>
                Tem uma ideia de aplicativo? Nós criamos! <br />
                Criação de aplicativos para Web, Android e iOS utilizando
                tecnologias de ponta.
              </p>
            </div>
          </article>
          <article>
            <img src="/images/cases/integracao.png" alt="" />
            <div className={styles.card}>
              <span>Web</span>
              <p>
                Conforme sua necessidade, desenvolvemos projetos de integração
                entre sistemas, infraestrutura de servidor e suporte
                especializado.
                <br />
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
