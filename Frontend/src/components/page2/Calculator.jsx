import React, { useState, useEffect } from 'react';
import styles from './Calculator.module.css';

const EducationLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(16);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateLoan = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12; // Monthly interest rate
    const n = loanTerm * 12; // Total number of months
    
    if (r === 0) {
      // Simple interest for 0% rate
      const emi = P / n;
      const totalAmt = P;
      setMonthlyEMI(emi);
      setTotalInterest(0);
      setTotalAmount(totalAmt);
    } else {
      // Standard EMI formula
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmt = emi * n;
      const totalInt = totalAmt - P;
      setMonthlyEMI(emi);
      setTotalInterest(totalInt);
      setTotalAmount(totalAmt);
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const handlePreset = (amount, term) => {
    setLoanAmount(amount);
    setLoanTerm(term);
  };

  const principalPercentage = (loanAmount / totalAmount) * 100 || 0;
  const interestPercentage = (totalInterest / totalAmount) * 100 || 0;

  return (
    <div className={styles.calculatorContainer}>
      <h1 className={styles.mainTitle}>Education Loan Calculator</h1>
      <p className={styles.subtitle}>Calculate your monthly EMI, total interest, and plan your education loan repayment</p>

      <div className={styles.contentWrapper}>
        <div className={styles.leftPanel}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Loan Details</h2>
            <div className={styles.inputGroup}>
              <label>Loan Amount</label>
              <div className={styles.inputWithPrefix}>
                <span>$</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
              </div>
              <input
                type="range"
                min="1000"
                max="200000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.rangeLabels}>
                <span>$1,000</span>
                <span>$200,000</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Interest Rate (Annual)</label>
              <div className={styles.inputWithSuffix}>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <span>%</span>
              </div>
              <input
                type="range"
                min="5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.rangeLabels}>
                <span>5%</span>
                <span>15%</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Loan Term</label>
              <div className={styles.inputWithSuffix}>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />
                <span>years</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.rangeLabels}>
                <span>1 year</span>
                <span>20 years</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.quickPresets}`}>
            <h2 className={styles.cardTitle}>Quick Presets</h2>
            <div className={styles.presetButtons}>
              <button onClick={() => handlePreset(25000, 5)} className={styles.presetBtn}>
                <strong>Undergraduate</strong>
                <span>$25K • 5 years</span>
              </button>
              <button onClick={() => handlePreset(75000, 10)} className={styles.presetBtn}>
                <strong>Graduate</strong>
                <span>$75K • 10 years</span>
              </button>
              <button onClick={() => handlePreset(50000, 8)} className={styles.presetBtn}>
                <strong>Professional</strong>
                <span>$50K • 8 years</span>
              </button>
              <button onClick={() => handlePreset(120000, 15)} className={styles.presetBtn}>
                <strong>Study Abroad</strong>
                <span>$120K • 15 years</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={`${styles.card} ${styles.emiCard}`}>
            <h2 className={styles.cardTitle}>Your EMI Calculation</h2>
            <div className={styles.emiResult}>
              <span className={styles.emiAmount}>${monthlyEMI.toFixed(0)}</span>
              <span className={styles.emiLabel}>Monthly EMI</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.breakdownCard}`}>
            <h2 className={styles.cardTitle}>Loan Breakdown</h2>
            <div className={styles.breakdownItem}>
              <span>Principal Amount</span>
              <strong>${loanAmount.toLocaleString()}</strong>
            </div>
            <div className={styles.breakdownItem}>
              <span>Total Interest</span>
              <strong className={styles.redText}>${totalInterest.toFixed(0).toLocaleString()}</strong>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.breakdownItem}>
              <span>Total Amount</span>
              <strong>${totalAmount.toFixed(0).toLocaleString()}</strong>
            </div>
          </div>

          <div className={`${styles.card} ${styles.paymentBreakdownCard}`}>
            <h2 className={styles.cardTitle}>Payment Breakdown</h2>
            <div className={styles.paymentBarContainer}>
              <div
                className={styles.paymentBarPrincipal}
                style={{ width: `${principalPercentage}%` }}
              ></div>
              <div
                className={styles.paymentBarInterest}
                style={{ width: `${interestPercentage}%` }}
              ></div>
            </div>
            <div className={styles.paymentLabels}>
              <div className={styles.paymentLabelItem}>
                <span>Principal</span>
                <strong>{principalPercentage.toFixed(1)}%</strong>
              </div>
              <div className={styles.paymentLabelItem}>
                <span>Interest</span>
                <strong>{interestPercentage.toFixed(1)}%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLoanCalculator;