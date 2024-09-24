import {
  Instagramm,
  Microphone,
  Phone,
  SharpCopyright,
  Whatsapp,
} from "../assets/icon";
import styles from "./style/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <img src={Microphone} alt="Microphone" />
      </div>

      <div className={styles.center}>
        <a
          href="https://t.me/@nurai_ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={SharpCopyright} alt="Copyright" /> Copyright 2024 designed
          by Nurai
        </a>

        <a
          href="https://t.me/Sur123pog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={SharpCopyright} alt="Copyright" /> Copyright 2024 developed
          by Syrgabek
        </a>
      </div>

      <div className={styles.right}>
        <a
          href="https://wa.me/996709346991"
          target="_blank"
          rel="noopener noreferrer"
        >
          +996 709 346 991
          <img src={Whatsapp} alt="WhatsApp" />
        </a>

        <a
          href="https://www.instagram.com/islam_kurmanbekov"
          target="_blank"
          rel="noopener noreferrer"
        >
          islam_kurmanbekov
          <img src={Instagramm} alt="Instagram" />
        </a>

        <a href="tel:+996709346991">
          +996 709 346 991
          <img src={Phone} alt="Phone" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
