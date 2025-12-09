'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <span className="logo-text">Rajkumar Auto Electricals</span>
          </Link>
        </div>
        <nav className="nav">
          <ul className="flex gap-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/warranty">Warranty Check</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/admin/login">Admin</Link></li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background-color: var(--bg-white);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-red) 0%, #ff6b6b 50%, var(--primary-red) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: shimmer 3s linear infinite, glow 2s ease-in-out infinite alternate;
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .logo-text:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 10px rgba(227, 30, 36, 0.5));
        }
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 5px rgba(227, 30, 36, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 15px rgba(227, 30, 36, 0.6));
          }
        }
        .nav ul {
          gap: 2rem;
        }
        .nav a {
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav a:hover {
          color: var(--primary-red);
        }
        @media (max-width: 768px) {
          .header .container {
            flex-direction: column;
            gap: 1rem;
          }
          .nav ul {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
