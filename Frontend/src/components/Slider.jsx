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
                <br />
                <div className={styles.searchBar}>
                  <div>
                    Loan Amount <br />
                    <input type="text" name="" id="" placeholder="Enter Amount"/>
                  </div>
                  <div>
                    Duration <br />
                    <select name="" id="">
                      <option value="Select Option">Select Duration</option>
                      <option value="Select Option">5 years</option>
                      <option value="Select Option">10 years</option>
                      <option value="Select Option">15 years</option>
                      <option value="Select Option">20 years</option>

                    </select>
                  </div>
                  <div>
                <div className={styles.start}>Compare Loans</div>

                  </div>
                </div>
            </div>
            
            <div className={styles.buttonBox}>
                <div className={styles.start}>Start Comparison</div>
                <div className={styles.learn}>Learn More</div>
            </div>
          </div>
          <div className={styles.container3} ><img src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20successful%20students%20celebrating%20graduation%20with%20diplomas%20in%20modern%20university%20campus%20setting%20with%20beautiful%20architecture%20and%20natural%20lighting%20representing%20educational%20achievement%20and%20financial%20success&width=600&height=600&seq=hero2&orientation=squarish" style={{width:"633px"}} alt="" /></div>
        </div>
      </div>
    </>
  );
}
export default Slider;
