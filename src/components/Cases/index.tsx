import styles from "../Cases/styles.module.scss";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Cases() {
  return (
    <div className={styles.container} id="cases">
      <section>
        <p className={styles.header}>
          Transforme suas incríveis ideias em realidade
        </p>
        <div className={styles.case}>
          <Swiper
            id="cases"
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            style={{
              "--swiper-navigation-color": "#777777",
              "--swiper-pagination-color": "#777777",
            }}
          >
            <SwiperSlide>
              <div className={styles.case}>
                <img src="/images/cases/web.png" alt="" />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <p>Web</p>
                  </div>
                  <div className={styles.cardBody}>
                    <p>
                      Sua necessidade hoje é um site responsivo e com um design
                      moderno, único e inovador? Somos o mapa para te guiar até
                      o futuro.
                    </p>
                  </div>
                  <div className={styles.cardFooter}>
                    <button type="submit">Saiba mais</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.case}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <p>Mobile</p>
                  </div>
                  <div className={styles.cardBody}>
                    <p>Tem uma ideia de aplicativo? Nós criamos!</p>
                    <p>
                      Criação de aplicativos para Web, Android e iOS utilizando
                      tecnologias de ponta.
                    </p>
                  </div>
                  <div className={styles.cardFooter}>
                    <button type="submit">Saiba mais</button>
                  </div>
                </div>
                <img src="/images/cases/mobile.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.case}>
                <img src="/images/cases/integracao.png" alt="" />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <p>Sistemas Web & Integrações</p>
                  </div>
                  <div className={styles.cardBody}>
                    <p>
                      Conforme sua necessidade, desenvolvemos projetos de
                      integração entre sistemas, infraestrutura de servidor e
                      suporte especializado.
                    </p>
                    <p>
                      Atendemos médias e grandes empresas com nossa solução.
                    </p>
                  </div>
                  <div className={styles.cardFooter}>
                    <button type="submit">Saiba mais</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
