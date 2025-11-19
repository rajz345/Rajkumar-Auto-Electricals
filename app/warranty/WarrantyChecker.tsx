'use client';

import { useState } from 'react';

export default function WarrantyChecker() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const res = await fetch('/api/warranty/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            });

            const data = await res.json();

            if (res.ok) {
                setResult(data);
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="warranty-checker">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="query">Enter Battery Serial Number / ID</label>
                        <input
                            type="text"
                            id="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="e.g., EX123456789"
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                        {loading ? 'Checking...' : 'Check Warranty'}
                    </button>
                </form>
            </div>

            {error && <div className="alert alert-error">{error}</div>}

            {result && (
                <div className={`result-box ${result.found ? (result.isValid ? 'valid' : 'expired') : 'not-found'}`}>
                    {result.found ? (
                        <>
                            <h3>{result.isValid ? '✅ Warranty Active' : '❌ Warranty Expired'}</h3>
                            <div className="details">
                                <p><strong>Customer:</strong> {result.customerName}</p>
                                <p><strong>Sale Date:</strong> {new Date(result.saleDate).toLocaleDateString()}</p>
                                <p><strong>Expires On:</strong> {new Date(result.expiryDate).toLocaleDateString()}</p>
                                <p><strong>Duration:</strong> {result.durationMonths} Months</p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h3>⚠️ Not Found</h3>
                            <p>No warranty record found for this ID. Please check and try again.</p>
                        </div>
                    )}
                </div>
            )}

            <style jsx>{`
        .warranty-checker {
          max-width: 600px;
          margin: 0 auto;
        }
        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
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
        .w-full {
          width: 100%;
        }
        .alert {
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .alert-error {
          background-color: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
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
        .result-box.not-found {
          border-color: #ffc107;
        }
        .details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        .details p {
          margin-bottom: 0.5rem;
        }
        h3 {
          text-align: center;
          margin-bottom: 1rem;
        }
      `}</style>
        </div>
    );
}
