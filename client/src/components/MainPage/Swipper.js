import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from '../../asserts/swipper.module.css';
const Swipper = () => {
  return (
    <div className={styles.swiper}>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectFade]}>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="/images/band.jpg"
              alt="band cats poster"
            />
            <p className={styles.title}>Банда</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="/images/devine cat.jpg"
              alt=""
            />
            <p className={styles.title}>
              Божественный <br /> кот
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="/images/sea cat.jpg"
              alt=""
            />
            <p className={styles.title}>Кот и море</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="/images/portrain.jpg"
              alt=""
            />
            <p className={styles.title}>Портрет</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
