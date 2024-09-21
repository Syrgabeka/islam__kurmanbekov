import styles from "./style/header.module.scss";
import { HeaderRight, HeaderTop } from "../assets/bgcImg";
import { PhotoWeb } from "../assets/img";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top__img}>
        <img src={HeaderTop} />
      </div>
      <div className={styles.right__img}>
        <img src={HeaderRight} />
      </div>
      <div className={styles.contant}>
        <div className={styles.header}>
          <p className={styles.name}>
            ИСЛАМ <br /> КУРМАНБЕКОВ
          </p>
          <p className={styles.statys}>Эстрада-учитель</p>
        </div>
        <div className={styles.main}>
          <img src={PhotoWeb} className={styles.photo} />
          <div className={styles.description}>
            <p>
              Я, Ислам Курманбеков, являюсь профессиональным певцом и
              музыкантом.
            </p>
            <p>
              Мое музыкальное образование и многолетний опыт позволили мне
              достичь высокого уровня мастерства в создании уникальных
              музыкальных произведений. Я работаю в разных жанрах, совмещая
              традиционные народные мотивы и современные музыкальные тенденции,
              что делает моё творчество уникальным и узнаваемым.
            </p>
            <p>
              Моя цель — через музыку передавать эмоции и смыслы, которые
              находят отклик в сердцах людей, создавая глубокие впечатления и
              незабываемые моменты.
            </p>
          </div>
        </div>
        <button className={styles.button}>НАПИСАТЬ</button>
      </div>
    </div>
  );
};

export default Header;
