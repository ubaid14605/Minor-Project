import styles from "/src/components/Features.module.css";
function Features() {
  return (
    <>
      <div className={styles.container}>
        <h1>Featured Loan Options</h1>
        <p>
         Compare top-rated education loan providers with competitive rates and flexible terms
        </p>

        <div className={styles.CardContainer}>
          <div className={styles.card}>
            <h5>Smart Comparison</h5>
            <br />

            <p>
              Compare loan options from multiple banks and financial
              institutions in one place
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.col}>
                <h5>StudentCredit</h5>
                <p>Interset Rate</p>
                <p>Max Amount</p>
                <p>Processing Time</p>
                <p>Eligibility</p>
            </div>
            <div className={styles.col}>
                <h3>StudentCredit</h3>
                <p>Interset Rate</p>
                <p>Max Amount</p>
                <p>Processing Time</p>
                <p>Eligibility</p>
            </div>
          </div>

          <div className={styles.card}>
            <h5>Transparent Information</h5>
            <br />
            <p>
              Access clear and comprehensive loan-related information with no
              hidden fees
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features;
