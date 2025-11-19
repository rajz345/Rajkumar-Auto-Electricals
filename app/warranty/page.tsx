'use client';

import WarrantyChecker from './WarrantyChecker';

export default function Warranty() {
  return (
    <div className="warranty-page">
      <div className="page-header">
        <div className="container">
          <h1>Check Your Warranty</h1>
          <p>Enter your battery details to verify warranty status.</p>
        </div>
      </div>

      <div className="container section">
        <WarrantyChecker />

        <div className="text-center mt-2 text-light">
          <p>Need help? <a href="/contact" className="text-primary">Contact Support</a></p>
        </div>
      </div>

      <style jsx>{`
        .page-header {
          background-color: var(--text-dark);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }
        .section {
          padding: 4rem 0;
        }
        .text-light {
          color: #666;
        }
        .text-primary {
          color: var(--primary-red);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
