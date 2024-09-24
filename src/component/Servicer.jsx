import styles from "./style/servicer.module.scss";
import { SerMobile, SerWeb } from "../assets/img";
import { Line, LineBottom } from "../assets/bgcImg";
import { useEffect, useState } from "react";
const servicer = [
  {
    servicer: "Запись вокала в студии",
    text: "Профессиональная запись вокала с использованием новейшего оборудования и технологий.",
    img: SerWeb,
    imgMobile: SerMobile,
  },
  {
    servicer: "Сведение и мастеринг трека",
    text: " Сведение и мастеринг — это финальные этапы создания музыкального произведения.",
    img: SerWeb,
    imgMobile: SerMobile,
  },
  {
    servicer: "Создание авторской аранжировки",
    text: "Мы работаем с разными музыкальными стилями и создадим аранжировку.",
    img: SerWeb,
    imgMobile: SerMobile,
  },
  {
    servicer: "Запись подкастов и озвучки",
    text: "Качественно записывает подкасты и озвучку, обеспечивая чёткое, профессиональное и приятное для слушателей звучание в любом формате контента.",
    img: SerWeb,
    imgMobile: SerMobile,
  },
];

export const Servicer = () => {
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
      <p className={styles.title}>МОИ УСЛУГИ</p>
      <div className={styles.contant}>
        {servicer.map(({ servicer, text, img, imgMobile }, index) => (
          <div
            className={index % 2 !== 0 ? styles.right__cart : ""}
            key={index + 1}
          >
            <div
              className={`${styles.cart} ${
                index % 2 !== 0 ? styles.row__reverse : ""
              }`}
            >
              <div className={styles.description}>
                <p className={styles.servicer}>{servicer}</p>
                <p className={styles.text}>{text}</p>
              </div>
              {windowWidth <= 700 ? (
                <img src={imgMobile} className={styles.img} />
              ) : (
                <img className={styles.img} src={img} />
              )}
            </div>
          </div>
        ))}
        <img src={Line} className={styles.line__top} />
        <img src={LineBottom} className={styles.line__bottom} />
      </div>
    </div>
  );
};
