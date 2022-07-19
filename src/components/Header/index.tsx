import styles from "../Header/styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/images/logo.svg" alt="" />
      <nav>
        <a href="#">Quem somos</a>
        <a href="#">Nossos cases</a>
        <a href="#">Tecnologias</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}
