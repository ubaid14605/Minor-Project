import styles from "./Steps.module.css";

function Steps() {
  return (
    <>
      <div className={styles.container}>
        <h1>How It Works?</h1>
        <p>Get the best education loan in just three simple steps</p>
        <div className={styles.myCont}>
          <div className={styles.CardContainer}>
            <div className={styles.step}>1</div>
            <h5>Enter Your Details</h5>
            <p>
              Provide your financial information, loan requirements, and
              educational goals
            </p>
          </div>

          <div className={styles.CardContainer}>
            <div className={styles.step}>2</div>
            <h5>Compare Options</h5>
            <p>
              Review personalized loan recommendations with detailed comparison
              of rates and terms
            </p>
          </div>

          <div className={styles.CardContainer}>
            <div className={styles.step}>3</div>
            <h5>Apply Instantly</h5>
            <p>
              Apply directly to your chosen lender with pre-filled applications
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Steps;
