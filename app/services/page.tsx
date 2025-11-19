'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive battery solutions for every vehicle.</p>
        </div>
      </div>

      <div className="container section">
        <div className="service-grid">
          <div className="service-image">
            <Image
              src="/images/service_battery_install.png"
              alt="Battery Installation"
              width={600}
              height={400}
              style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
          <div className="service-content">
            <h2>Professional Battery Installation</h2>
            <p>
              We provide expert installation services for all types of batteries.
              Our trained technicians ensure that your battery is installed correctly
              and safely, checking the electrical system to prevent future issues.
            </p>
            <ul className="service-list">
              <li>Free installation with every purchase</li>
              <li>Electrical system check-up</li>
              <li>Old battery exchange offers</li>
              <li>On-site installation available</li>
            </ul>
            <Link href="/contact" className="btn btn-primary mt-1">Book Service</Link>
          </div>
        </div>
      </div>

      <div className="bg-light section">
        <div className="container">
          <h2 className="text-center mb-2">We Specialize In</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Bike Batteries</h3>
              <p>Wide range of Exide batteries for all motorcycle brands. Long-lasting performance for your daily commute.</p>
            </div>
            <div className="card">
              <h3>Car Batteries</h3>
              <p>Power your drive with our premium car batteries. Suitable for hatchbacks, sedans, and SUVs.</p>
            </div>
            <div className="card">
              <h3>Heavy Duty & Inverters</h3>
              <p>Robust batteries for trucks, tractors, and home inverters. Reliable power backup solutions.</p>
            </div>
          </div>
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
        .bg-light {
          background-color: var(--bg-light);
        }
        .service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .service-list {
          margin: 1.5rem 0;
          list-style: disc;
          padding-left: 1.5rem;
        }
        .service-list li {
          margin-bottom: 0.5rem;
        }
        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border-left: 4px solid var(--primary-red);
        }
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
