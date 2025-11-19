'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <Image
            src="/images/hero_banner.png"
            alt="Rajkumar Auto Electricals Shop"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1>Authorized Exide Dealer in Balangir</h1>
          <p className="hero-subtitle">Powering Your Journey with Reliable Batteries & Services.</p>
          <div className="hero-buttons">
            <Link href="/products" className="btn btn-primary">View Products</Link>
            <Link href="/services" className="btn btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section container text-center">
        <h2>Welcome to Rajkumar Auto Electricals</h2>
        <p className="intro-text">
          We are your trusted partner for all automotive electrical needs in Balangir.
          Located near Ramai Talkies, we offer a wide range of Exide batteries for bikes, cars, and heavy-duty vehicles.
          With expert installation and genuine warranty support, we ensure your vehicle never stops.
        </p>
      </section>

      {/* Featured Categories */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-2">Our Products</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Bike Batteries</h3>
              <p>High-performance batteries for all two-wheelers.</p>
              <Link href="/products?category=Bike" className="link-arrow">Explore &rarr;</Link>
            </div>
            <div className="card">
              <h3>Car Batteries</h3>
              <p>Reliable power for your car's journey.</p>
              <Link href="/products?category=Car" className="link-arrow">Explore &rarr;</Link>
            </div>
            <div className="card">
              <h3>Heavy Duty</h3>
              <p>Durable batteries for trucks and inverters.</p>
              <Link href="/products?category=Heavy%20Duty" className="link-arrow">Explore &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="section container">
        <div className="location-box">
          <div className="location-text">
            <h2>Visit Us Today</h2>
            <p><strong>Rajkumar Auto Electricals</strong></p>
            <p>Near Ramai Talkies, Balangir, Odisha</p>
            <p>Open: Mon-Sat, 9:00 AM - 8:00 PM</p>
            <Link href="/contact" className="btn btn-primary mt-1">Get Directions</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          color: white;
        }
        .hero-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
        .btn-outline-white {
          border: 2px solid white;
          color: white;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .btn-outline-white:hover {
          background: white;
          color: var(--primary-red);
        }
        .section {
          padding: 4rem 0;
        }
        .bg-light {
          background-color: var(--bg-light);
        }
        .intro-text {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.1rem;
          color: var(--text-light);
        }
        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s;
          border-top: 4px solid var(--primary-red);
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .link-arrow {
          color: var(--primary-red);
          font-weight: 600;
          margin-top: 1rem;
          display: inline-block;
        }
        .location-box {
          background: var(--bg-light);
          padding: 3rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid var(--border-color);
        }
      `}</style>
    </div>
  );
}
