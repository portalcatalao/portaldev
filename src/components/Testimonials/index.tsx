import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../Testimonials/styles.module.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <section>
        <span>
          Queremos transformar sua ideia
          <p>em uma experiência única</p>
        </span>
        <div className={styles.case}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            id="testimonial"
            breakpoints={{
              1439: {
                width: 900,
                slidesPerView: 1,
                spaceBetween: 8,
              },
              1024: {
                width: 600,
                slidesPerView: 1,
                slidesPerGroup: 1.5,
                spaceBetween: 32,
              },
              768: {
                width: 600,
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              320: {
                width: 300,
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.testimonials}>
                <article>
                  <p>
                    &quot;Estou com Portal Catalão tem 15 anos. O meu site é um dos
                    mais acessados na região. E, isso foi proporcionado pela
                    dinâmica de serviço e visibilidade do que foi produzido para
                    o meu site. A equipe do Portal Catalão apenas gratidão, pois
                    tenho resultados concretos&quot;
                  </p>
                  <span>
                    Luiz Cláudio
                    <p>Blog da Verdadea</p>
                  </span>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonials}>
                <article>
                  <p>
                    &quot;Tive um sie desenvolvido pelo Portal Catalão e me deu
                    bastante retorno, pois não tinha presença digital. Então, me
                    ajudou a criar novas possibilidades de negócios&quot;.
                  </p>
                  <span>
                    Camila Guimarães
                    <p>Medida Certa</p>
                  </span>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonials}>
                <article>
                  <p>
                    &quot;Acreditar e ir em frente com um negócio não é fácil. E,
                    todas as pessoas pesquisam se realmente você está na
                    internet. A minha porta de entrada para o mundo digital veio
                    por meio do Portal Catalão, que me ajudou a construir minha
                    presença digital com meu site onde faço captura de Leads
                    para venda de veículos&quot;.
                  </p>
                  <span>
                    Jaime Junior
                    <p>JMK Mitsubishi</p>
                  </span>
                </article>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.testimonials}>
                <article>
                  <p>
                    &quot;A minha presença digital era muito fraca e precisei
                    reformular o meu site do 0 mesmo. Pois, não tinha condições
                    de vender nada ou me apresentar para ninguém com o que
                    tinha. O Portal Catalão abriu muitas portas para o meu
                    negócio com o novo site. Só tenho a agradecer&quot;.
                  </p>
                  <span>
                    Renato Nogueira
                    <p>Nogueira Turismo</p>
                  </span>
                </article>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.testimonials}>
                <article>
                  <p>
                    &quot;Responsável pelo desenvolvimento e manutenção do site da
                    Revista Portal VIP, a equipe Portal Catalão é séria,
                    comprometida, criativa e eficiente. O Portal Catalão
                    representa a oportunidade de extrapolar os limites de
                    Catalão e da região Sudeste, possibilitando levar a Revista
                    Portal VIP para o Brasil e o mundo&quot;.
                  </p>
                  <span>
                    Iliane Fonseca
                    <p>Revista Portal Vip</p>
                  </span>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
