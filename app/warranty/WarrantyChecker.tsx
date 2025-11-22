'use client';

import { useState } from 'react';

export default function WarrantyChecker() {
  const [saleDate, setSaleDate] = useState('');
  const [batteryType, setBatteryType] = useState('bike');
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const saleDateObj = new Date(saleDate);
    const today = new Date();

    // Calculate months difference
    const monthsDiff = (today.getFullYear() - saleDateObj.getFullYear()) * 12 +
      (today.getMonth() - saleDateObj.getMonth());

    // Warranty periods based on battery type
    const warrantyPeriods = {
      bike: { guarantee: 24, warranty: 24, total: 48 },
      car: { guarantee: 30, warranty: 30, total: 60 }
    };

    const periods = warrantyPeriods[batteryType as 'bike' | 'car'];

    let status = '';
    let isValid = false;
    let periodType = '';

    if (monthsDiff <= periods.guarantee) {
      status = 'active';
      isValid = true;
      periodType = 'Guarantee Period';
    } else if (monthsDiff <= periods.total) {
      status = 'active';
      isValid = true;
      periodType = 'Warranty Period';
    } else {
      status = 'expired';
      isValid = false;
      periodType = 'Expired';
    }

    const guaranteeEndDate = new Date(saleDateObj);
    guaranteeEndDate.setMonth(guaranteeEndDate.getMonth() + periods.guarantee);

    const warrantyEndDate = new Date(saleDateObj);
    warrantyEndDate.setMonth(warrantyEndDate.getMonth() + periods.total);

    setResult({
      isValid,
      status,
      periodType,
      batteryType: batteryType.charAt(0).toUpperCase() + batteryType.slice(1),
      saleDate: saleDateObj,
      monthsElapsed: monthsDiff,
      guaranteePeriod: periods.guarantee,
      warrantyPeriod: periods.warranty,
      totalPeriod: periods.total,
      guaranteeEndDate,
      warrantyEndDate,
    });
  };

  return (
    <div className="warranty-checker">
      {/* Warranty Reference Information */}
      <div className="warranty-info">
        <h2>Exide Battery Warranty Information</h2>
        <div className="warranty-cards">
          <div className="warranty-card">
            <h3>🏍️ Bike Battery</h3>
            <p className="warranty-period">24 months guarantee + 24 months warranty</p>
            <p className="total-period">Total: 48 months</p>
          </div>
          <div className="warranty-card">
            <h3>🚗 Car Battery</h3>
            <p className="warranty-period">30 months guarantee + 30 months warranty</p>
            <p className="total-period">Total: 60 months</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h2>Check Your Warranty Status</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="batteryType">Battery Type</label>
            <select
              id="batteryType"
              value={batteryType}
              onChange={(e) => setBatteryType(e.target.value)}
              className="input-field"
              required
            >
              <option value="bike">Bike Battery</option>
              <option value="car">Car Battery</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="saleDate">Enter Sale Date</label>
            <input
              type="date"
              id="saleDate"
              value={saleDate}
              onChange={(e) => setSaleDate(e.target.value)}
              required
              className="input-field"
              max={new Date().toISOString().split('T')[0]}
            />
            <p className="help-text">Select the date when you purchased the battery</p>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Check Warranty
          </button>
        </form>
      </div>

      {result && (
        <div className={`result-box ${result.isValid ? 'valid' : 'expired'}`}>
          <h3>{result.isValid ? '✅ Warranty Active' : '❌ Warranty Expired'}</h3>
          <div className="status-badge">
            <strong>{result.periodType}</strong>
          </div>
          <div className="details">
            <p><strong>Battery Type:</strong> {result.batteryType}</p>
            <p><strong>Sale Date:</strong> {result.saleDate.toLocaleDateString()}</p>
            <p><strong>Months Elapsed:</strong> {result.monthsElapsed} months</p>
            <hr />
            <p><strong>Guarantee Period:</strong> {result.guaranteePeriod} months (ends {result.guaranteeEndDate.toLocaleDateString()})</p>
            <p><strong>Warranty Period:</strong> {result.warrantyPeriod} months (ends {result.warrantyEndDate.toLocaleDateString()})</p>
            <p><strong>Total Coverage:</strong> {result.totalPeriod} months</p>
            {result.isValid && (
              <div className="remaining-info">
                <p className="highlight">
                  {result.monthsElapsed <= result.guaranteePeriod
                    ? `${result.guaranteePeriod - result.monthsElapsed} months remaining in guarantee period`
                    : `${result.totalPeriod - result.monthsElapsed} months remaining in warranty period`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .warranty-checker {
          max-width: 800px;
          margin: 0 auto;
        }
        .warranty-info {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          color: white;
        }
        .warranty-info h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .warranty-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .warranty-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
        }
        .warranty-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
        .warranty-period {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          opacity: 0.95;
        }
        .total-period {
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }
        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }
        .form-container h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .input-field {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        .input-field:focus {
          border-color: var(--primary-red);
          outline: none;
        }
        .help-text {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.5rem;
        }
        .w-full {
          width: 100%;
        }
        .result-box {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-top: 4px solid #ccc;
        }
        .result-box.valid {
          border-color: #28a745;
        }
        .result-box.expired {
          border-color: #dc3545;
        }
        .status-badge {
          text-align: center;
          padding: 0.5rem 1rem;
          background: #f0f0f0;
          border-radius: 20px;
          margin: 1rem auto;
          display: block; /* Changed from inline-block to block for full width */
          width: fit-content; /* Adjusted to fit content */
        }
        .result-box.valid .status-badge {
          background: #d4edda;
          color: #155724;
        }
        .result-box.expired .status-badge {
          background: #f8d7da;
          color: #721c24;
        }
        .details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        .details p {
          margin-bottom: 0.5rem;
        }
        .details hr {
          margin: 1rem 0;
          border: none;
          border-top: 1px solid #eee;
        }
        .remaining-info {
          margin-top: 1rem;
          padding: 1rem;
          background: #e7f3ff;
          border-radius: 4px;
          border-left: 4px solid #2196f3;
        }
        .highlight {
          color: #0066cc;
          font-weight: 600;
          margin: 0;
        }
        h3 {
          text-align: center;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
