import styles from './page3.module.css';

const ContentSection = () => {
  return (
    <div className={styles.contentSection}>
      <h2 className={styles.heading}>What is an Education Loan EMI Calculator?</h2>
      <p>
        Groww's Education Loan EMI calculator is an online instrument that assists the loan-borrower with the calculation of the amount that they need to pay every month after borrowing an educational loan. It will give you an amortization schedule that shows you the EMI breakup in terms of monthly interest paid and the principal that has been repaid.
      </p>
      <p>
        It will also detail the amount of loan that you have repaid to date and how much is yet outstanding. All of this will give you a fair idea of how much an educational loan is going to cost you by assisting you in calculating the total interest amount that needs to be paid over the whole loan tenure.
      </p>

      <h2 className={styles.heading}>How Does the Education Loan Calculator Help You?</h2>
      <p>
        If you are or planning to apply for an educational loan, you will choose to know how much on a monthly basis you would be giving in to the EMI of the loan. When you know how much would be spent there, you can apply preferred interest rates and selected banks. Along with that, you could also plan your monthly budget.
      </p>

      <h2 className={styles.heading}>How to Calculate the Educational Loans EMI?</h2>
      <p>
        Mentioned below is the formula and an example to show how educational loan EMI is calculated.
      </p>
      <h3 className={styles.subHeading}>Formula:</h3>
      <p>This is the formula that is used to calculate the EMI of an educational loan.</p>
      <p className={styles.formula}>EMI = [P*R*(1+R)^n]/[(1+R)^n-1]</p>
      <p>P = The principal amount</p>
      <p>R = The rate of interest</p>
      <p>n = The tenure</p>

      <h3 className={styles.subHeading}>Example:</h3>
      <p>Let us understand with an example how the educational loan EMI is calculated.</p>
      <p>Mr Gokul borrows an educational loan of Rs. 10 lakhs with an average interest rate of 12% for a period of two years, and then the EMI would be:</p>
      <ul className={styles.exampleList}>
        <li>P = 10 lakhs</li>
        <li>R = 12/100/12 (converted to months)</li>
        <li>N = 2 years</li>
        <li>EMI = Rs. 46,073</li>
      </ul>

      <h2 className={styles.heading}>Advantages of Using the Educational Loan EMI Calculator</h2>
      <ul className={styles.prosList}>
        <li>The Educational loan EMI calculator will show you the EMI amount you would have to pay within seconds.</li>
        <li>You will get to see a clear picture of the EMIs that you will be paying every month.</li>
        <li>It will assist you in budgeting for the expenses and also saving for your financial goals.</li>
        <li>The amortization schedule shows you the education loan EMIs that you have already paid off.</li>
        <li>You will also gain an idea of the principal outstanding on the loan. This will help you manage your funds.</li>
        <li>You could also use this calculator from anywhere you wish, like, and all for free.</li>
      </ul>

      <h2 className={styles.heading}>FAQs</h2>
      <div className={styles.faqSection}>
        {/* FAQ items would be mapped here */}
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>Is the education loan interest rate calculator and EMI calculator the same?</p>
          <span className={styles.faqIcon}>+</span>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>What is covered in an educational loan?</p>
          <span className={styles.faqIcon}>+</span>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;