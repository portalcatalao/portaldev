import styles from "../Technologies/styles.module.scss";
import { CheckSquare } from "react-feather";

export default function Technologies() {
  return (
    <section className={styles.technologies} id="technologies">
      <div className={styles.card}>
        <span>Tecnologias</span>
        <p>
          Para nós, cada site é único. Em vista disso, buscamos sempre novidades
          e software arquitetados para oferecer a melhor solução para a sua
          necessidade. Percorrendo pelo briefing, prototipação, estrutura de
          construção e arquitura de navegação do site para oferecer uma
          experiência agradável ao usuário.
        </p>
        <div className={styles.methods}>
          <div className={styles.item}>
            <CheckSquare size={24} />
            <p>Design Intuitivo e Interativo</p>
          </div>
          <div className={styles.item}>
            <CheckSquare size={24} />
            <p>Cultura ágil</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <img src="/images/tools/github.svg" alt="" />
          <img src="/images/tools/figma.svg" alt="" />
          <img src="/images/tools/adobe-xd.svg" alt="" />
          <img src="/images/tools/notion.svg" alt="" />
        </div>
      </div>
      <div className={styles.frameworks}>
        <img
          className={styles.tech}
          src="/images/tools/tools.svg"
          alt="Tecnologias utilizadas na empresa"
        />
        <article className={styles.next}>
          <span>Next.js</span>
          <div className={styles.card}>
            Next.js é um framework de código aberto, criado com React e permite
            o desenvolvimento de aplicações tanto front-end quanto back-end.
          </div>
        </article>

        <article className={styles.symfony}>
          <span>Symfony</span>
          <div className={styles.card}>
            Symfony é um framework livre do tipo fullstack para desenvolvimento
            de aplicações web, com a linguagem PHP e o paradigma MVC, disponível
            sob a Licença MIT.
          </div>
        </article>

        <article className={styles.nest}>
          <span>Nest</span>
          <div className={styles.card}>
            Nest é uma estrutura progressiva do Node.js para criar aplicativos
            do lado do servidor eficientes, confiáveis ​​e escaláveis.
          </div>
        </article>

        <article className={styles.javascript}>
          <span>JavaScript</span>
          <div className={styles.card}>
            JavaScript é uma linguagem de programação interpretada estruturada,
            de script em alto nível com tipagem dinâmica fraca e multiparadigma.
          </div>
        </article>

        <article className={styles.flutter}>
          <span>Flutter</span>
          <div className={styles.card}>
            O Flutter utiliza uma linguagem também criado pelo próprio Google,
            chamada Dart., sendo essa linguagem compatível com a orientação a
            objetos e programação funcional
          </div>
        </article>

        <article className={styles.bootstrap}>
          <span>BootStrap 5</span>
          <div className={styles.card}>
            Bootstrap é um framework front-end que fornece estruturas de CSS
            para a criação de sites e aplicações responsivas de forma rápida e
            simples.
          </div>
        </article>
      </div>
    </section>
  );
}
