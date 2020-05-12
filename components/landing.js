import styles from './landing.module.scss';
import { FaGithubSquare } from 'react-icons/fa';

export default () => (
  <section className={styles.landing}>
    <div className={styles.landing_content}>
      <h1 className={`${styles.landing_title} ${styles.white}`}>
        BRUNO TORRES
      </h1>
      <p className={`${styles.landing_subtitle} ${styles.white}`}>
        I’m a web and software developer
        <br />
        that’s passionate about building
        <br />
        clean, modern solutions.
      </p>
      <div className={styles.social}></div>
    </div>
    <div className={styles.landing_img}></div>
  </section>
);
