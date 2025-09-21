import styles from "/src/components/Slider.module.css";
function Slider() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            {/* col1 */}
            <h1>
              Find the Best <br /> Eduction Loan <br /> for Your Future
            </h1>
            <p>
              Compare loan options from multiple lenders, get personalized
              recommendations, and make informed decisions about your education
              financing with our smart platform.
            </p>

            <div className={styles.searchBox}>
                <h4>Quick Loan Estimate</h4>
            </div>
            
            <div className={styles.buttonBox}>
                <button>Start Comparison</button>
                <button>Learn More</button>
            </div>
          </div>
          <div className={styles.container3} >col1</div>
        </div>
      </div>
    </>
  );
}
export default Slider;
