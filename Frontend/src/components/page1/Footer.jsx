import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <>
     <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.companyInfo}>
          <h2 className={styles.logo}>LoanCompare</h2>
          <p className={styles.tagline}>
            Your trusted partner in finding the perfect loan. We connect you with 50+
            top lenders to ensure you get the best rates and terms for your financial
            needs.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <p className={styles.contactInfo}>1-800-LOANCOMPARE (1-800-562-6266)</p>
          <p className={styles.contactInfo}>support@loancompare.com</p>
          <p className={styles.contactInfo}>Monday - Friday: 8AM - 8PM EST</p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Loan Types</h3>
            <ul className={styles.linkList}>
              <li><a href="/personal-loans">Personal Loans</a></li>
              <li><a href="/auto-loans">Auto Loans</a></li>
              <li><a href="/mortgages">Mortgages</a></li>
              <li><a href="/business-loans">Business Loans</a></li>
              <li><a href="/student-loans">Student Loans</a></li>
              <li><a href="/home-equity-loans">Home Equity Loans</a></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li><a href="/loan-calculator">Loan Calculator</a></li>
              <li><a href="/credit-score-guide">Credit Score Guide</a></li>
              <li><a href="/financial-blog">Financial Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact-support">Contact Support</a></li>
              <li><a href="/compare-lenders">Compare Lenders</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h3 className={styles.newsletterTitle}>Stay Updated on Loan Rates</h3>
          <p className={styles.newsletterText}>Get weekly updates on the best loan rates and exclusive offers from our lender partners.</p>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.emailInput} 
            />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
          <p className={styles.spamNotice}>No spam, unsubscribe at any time. Privacy policy applies.</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.copyrightSection}>
          <p>© 2024 LoanCompare. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/made-with-readdy">Made with Readdy</a>
          </div>
        </div>
        <p className={styles.disclaimer}>
          Important Disclaimer: LoanCompare is a loan marketplace that connects borrowers with lenders. We are not a lender and do not make credit decisions. Loan approval and terms are subject to lender requirements.
          Rates shown are estimates and may vary based on creditworthiness and other factors. All loans are subject to credit approval and verification of information.
        </p>
      </div>
    </footer>
      ;
    </>
  );
}

export default Footer;
