import styles from "../Header/styles.module.scss";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const router = useRouter();
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/images/logo.svg" alt="Logotipo do Portal Dev" />
      </Link>
      <nav ref={navRef}>
        <Link href="#company" onClick={showNavBar}>
          Quem somos
        </Link>

        <Link href="#cases" onClick={showNavBar}>
          <a>Nossos cases</a>
        </Link>

        <Link href="#technologies" onClick={showNavBar}>
          <a>Tecnologias</a>
        </Link>

        <Link href="#contact" onClick={showNavBar}>
          <a>Contato</a>
        </Link>
        <button className={styles.btnClose} onClick={showNavBar}>
          <X></X>
        </button>
      </nav>
      <button onClick={showNavBar}>
        <Menu></Menu>
      </button>
    </header>
  );
}
