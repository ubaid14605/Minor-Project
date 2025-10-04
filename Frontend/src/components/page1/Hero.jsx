import styles from './Hero.module.css';
function Hero() {
  return (
    <>
      <div className={styles.container}>
        <h1>Why Choose Our Platform?</h1>
        <p>
          We simplify the loan comparison process by providing comprehensive
          analysis, <br /> personalized recommendations, and transparent
          information all in one place.
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
            <h5>Interest Rate Analysis</h5>
            <br />

            <p>
              Get detailed analysis of interest rates, repayment terms, and
              eligibility criteria
            </p>
          </div>

          <div className={styles.card}>
            <h5>Personalized Recommendations</h5>
            <br />

            <p>
              Receive loan suggestions based on your financial
              situation and preferences
            </p>
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
export default Hero;
