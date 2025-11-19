'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Rajkumar Auto Electricals</h3>
            <p>Authorized Exide Dealer in Balangir.</p>
            <p>Powering Your Journey.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/warranty">Warranty Check</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Near Ramai Talkies, Balangir</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@rajkumarauto.com</p>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Rajkumar Auto Electricals. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--text-dark);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-col h3 {
          color: var(--primary-red);
          margin-bottom: 1rem;
        }
        .footer-col h4 {
          margin-bottom: 1rem;
          color: #fff;
        }
        .footer-col ul li {
          margin-bottom: 0.5rem;
        }
        .footer-col a:hover {
          color: var(--primary-red);
        }
        .footer-bottom {
          border-top: 1px solid #444;
          padding-top: 1rem;
          font-size: 0.9rem;
          color: #888;
        }
      `}</style>
    </footer>
  );
}
