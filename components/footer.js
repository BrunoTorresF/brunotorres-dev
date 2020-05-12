import styles from './footer.module.scss';

export default () => (
  <footer className={styles.footer}>
    <div className={styles.footer_wrapper}>
      <p className={styles.footer_item}>&copy; 2020</p>
      <p className={styles.footer_item}>Bruno Torres</p>
      <p className={styles.footer_item}>
        <a href="https://nextjs.org/">Powered by Nextjs</a>
      </p>
    </div>
  </footer>
);
