import styles from "./Features.module.css";
function Features() {
  return (
    <>
      <div className={styles.container}>
        <h1>Featured Loan Options</h1>
        <p>
          Compare top-rated education loan providers with competitive rates and
          flexible terms
        </p>

        <div className={styles.CardContainer}>
          <div className={styles.card}></div>

          <div className={styles.card}></div>

          <div className={styles.card}></div>
        </div>
      </div>
    </>
  );
}
export default Features;
