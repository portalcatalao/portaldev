import styles from "../Footer/styles.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={styles.footer}>
        <article className={styles.infosCompany}>
          <p className={styles.nameCompany}>Portal.dev</p>
          <p>Portal Catalao Internet Services LTDA</p>
          <p>CNPJ 07.156.505/0001-99</p>
          <p>Confie em quem tem experiência no mercado. 💻</p>
        </article>
        <article className={styles.productsCompany}>
          <div className={styles.product}>
            <p>Instituição</p>

            <a href="/privacy">Política de Privacidade</a>
            <a href="/terms">Termos de uso</a>
          </div>
          <div className={styles.product}>
            <p>Produtos</p>
            <a href="/">PortalDev</a>
            <a href="https://www.portalcatalao.com.br/" target="_blank">
              Portal Catalão
            </a>
            <a href="https://guiacatalao.com.br/" target="_blank">
              Guia Catalão
            </a>
            <a
              href="https://www.portalcatalao.com.br/portal/classificados/"
              target="_blank"
            >
              Classificados
            </a>
            <a
              href="https://portalcatalao.com.br/portal/classificados/anuncios-imoveis,AN,MTI.rb"
              target="_blank"
            >
              Imóveis
            </a>
          </div>
          <div className={styles.product}>
            <p>Contato</p>

            <a
              href="https://api.whatsapp.com/send?phone=556499564405&text=Oi"
              target="_blank"
            >
              Whatsapp
            </a>
            <a
              href="https://www.google.com/maps/dir/-18.1717608,-47.9513065/portal+catalao/@-18.1677872,-47.9518959,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94a6666c4ca09061:0x988eafae945d0f96!2m2!1d-47.9458238!2d-18.1658107"
              target="_blank"
            >
              Endereço
            </a>
          </div>
        </article>
      </section>
      <div className={styles.container}>
        <section className={styles.newsletter}>
          <p>Assine nossa newsletter</p>
          <div className={styles.formNewsletter}>
            <form action="#">
              <input type="text" name="name" id="name" placeholder="Seu nome" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu email"
              />
              <footer>
                <button type="submit">Inscrever-se!</button>
              </footer>
            </form>
            <div className={styles.socialMedia}>
              <div className={styles.itemMedia}>
                <a
                  href="https://www.linkedin.com/company/portal-catalao-internet-service/mycompany/"
                  target="_blank"
                >
                  <img src="/images/media/linkedin.svg" alt="" />
                </a>
              </div>
              <div className={styles.itemMedia}>
                <a
                  href="https://www.instagram.com/portalcatalao/"
                  target="_blank"
                >
                  <img src="/images/media/instagram.svg" alt="" />
                </a>
              </div>
              <div className={styles.itemMedia}>
                <a
                  href="https://www.facebook.com/portalcatalao"
                  target="_blank"
                >
                  <img src="/images/media/facebook.svg" alt="" />
                </a>
              </div>
              <div className={styles.itemMedia}>
                <a href="https://twitter.com/portalcatalao" target="_blank">
                  <img src="/images/media/twitter.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.copyright}>
        <p>© Portal Catalão Internet Services. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
