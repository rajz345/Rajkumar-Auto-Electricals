'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/admin/dashboard');
            } else {
                const data = await res.json();
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Admin Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    {error && <p className="error-text">{error}</p>}
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
            </div>

            <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          background-color: #f4f4f4;
        }
        .login-box {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--primary-red);
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
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .error-text {
          color: red;
          margin-bottom: 1rem;
          text-align: center;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
        </div>
    );
}
