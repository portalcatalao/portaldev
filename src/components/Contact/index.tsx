import styles from "../Contact/styles.module.scss";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <section>
        <img src="/images/hand-testimonials.png" alt="Imagem banner" />
        <div className={styles.form}>
          <p className={styles.header}>Vamos trabalhar juntos?</p>
          <form action="#">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome ou nome da empresa"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="tel" id="tel" placeholder="Telefone" />
            <textarea name="comment" placeholder="Deixe seu comentário" />
            <footer>
              <button type="submit">Vamos conversar! 🤝</button>
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
}
