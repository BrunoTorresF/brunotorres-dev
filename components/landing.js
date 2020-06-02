import styles from './landing.module.scss';
import {
  FaGithubSquare,
  FaEnvelope,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default () => (
  <IconContext.Provider
    value={{
      color: 'rgba(250, 249, 249, 1)',
      size: '2em',
      className: 'social_icons',
    }}>
    <main>
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
          <div className={styles.social}>
            <a
              href="https://github.com/BrunoTorresF"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              <FaGithubSquare />
            </a>
            <a
              href="mailto:contact@brunotorres.dev"
              target="_blank"
              rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com/BrunoTFMX"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              <FaTwitterSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/brunotorresf/"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.landing_img}></div>
      </section>
    </main>
  </IconContext.Provider>
);
