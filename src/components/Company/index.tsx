import styles from "../Company/styles.module.scss";

import { Briefcase } from "react-feather";
import { Database } from "react-feather";
import { Users } from "react-feather";

export default function Company() {
  return (
    <div className={styles.container} id="company">
      <section className={styles.company}>
        <span className={styles.header}>
          Somos referência no
          <p className={styles.emphasis}>mercado</p>
        </span>

        <div className={styles.historyCompany}>
          <div className={styles.card}>
            <p className={styles.cardBody}>
              Atuamos no mercado de tecnologia da informação há mais de 20 anos.
              Nosso time é especializado em criar sites, lojas virtuais, landing
              pages, blog, portais e aplicativos. <br />
              Com foco em oferecer a melhor experiência de navegação aos seus
              usuários. Analisamos seu público-alvo e elaboramos estratégias
              para sua empresa se destacar na web e ser encontrada de forma
              rápida!
            </p>
            <div className={styles.cardFooter}>
              <div className={styles.item}>
                <Briefcase size={24} />
                <p>+6 anos</p>
              </div>
              <div className={styles.item}>
                <Database size={24} />
                <p>+300 projetos</p>
              </div>
              <div className={styles.item}>
                <Users size={24} />
                <p>+616 cliente</p>
              </div>
            </div>
          </div>
          <img
            src="/images/dev-portal.png"
            alt="Imagem do ambiente de desenvolvimento no Portal Catalão"
          />
        </div>
      </section>
    </div>
  );
}
