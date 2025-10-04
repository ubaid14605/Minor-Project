import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <img src="" alt="LoanFinder Logo" /> */}
        <span>LoanFinder</span>
      </div>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/compare" className={styles.navLink}>Compare Loans</a>
        <a href="/calculator" className={`${styles.navLink} ${styles.active}`}>Calculator</a>
        <a href="/resources" className={styles.navLink}>Resources</a>
      </nav>
      <button className={styles.getStartedBtn}>Get Started</button>
    </header>
  );
};

export default Header;