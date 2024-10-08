import styles from "./style/about.module.scss";
import { MainBotton, MainTop } from "../assets/bgcImg";
import { Circle, ImgMobile } from "../assets/img";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <p className={styles.name}>ОБО МНЕ</p>
        <p className={styles.text}>
          Являясь вокалистом, я стремлюсь к идеальному звучанию. Благодаря моему
          опыту и владению современными технологиями, я создаю аудиозаписи,
          которые отличаются чистотой и высоким качеством. Каждая деталь имеет
          значение, и я тщательно подхожу к работе, чтобы добиться идеального
          результата.
        </p>
        {windowWidth <= 850 ? (
          <img src={ImgMobile} className={styles.img__top} />
        ) : (
          <img src={MainTop} className={styles.img__top} />
        )}
      </div>
      <div className={styles.about}>
        <p className={styles.name}>МОЯ ЦЕЛЬ</p>
        <p className={styles.text}>
          создавать музыку, которая вдохновляет и затрагивает сердца людей, а
          также развиваться как профессионал в звукозаписи, чтобы каждый мой
          трек отличался высоким качеством и глубоким эмоциональным содержанием.
        </p>
        {windowWidth <= 850 ? (
          <img src={ImgMobile} className={styles.img__top} />
        ) : (
          <img src={MainBotton} className={styles.img__bottom} />
        )}
      </div>
      <div className={styles.img}>
        <img src={Circle} className={styles.photo} />
      </div>
    </div>
  );
};

export default AboutMe;
