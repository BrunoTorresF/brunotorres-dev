import Link from 'next/link';
import styles from './header.module.scss';

export default () => (
  <header className={styles.header}>
    <nav className={styles.nav_wrapper}>
      <Link href="/">
        <a className={styles.nav_item}>Home</a>
      </Link>{' '}
      <Link href="/about">
        <a className={styles.nav_item}>About</a>
      </Link>{' '}
      <Link href="/cv">
        <a className={styles.nav_item}>CV</a>
      </Link>
      <Link href="/contact">
        <a className={styles.nav_item}>Contact</a>
      </Link>
    </nav>
  </header>
);
