'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      {/* Hero Section with modern gradient overlay */}
      <section className="hero">
        <div className="hero-image-container">
          <Image
            src="/images/exide_logo.png"
            alt="Exide Logo - Authorized Dealer"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className={`container hero-content ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="hero-title">Authorized Exide Dealer in Balangir</h1>
          <p className="hero-subtitle">Powering Your Journey with Reliable Batteries & Services.</p>
        </div>
        {/* Floating particles effect */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </section>

      {/* Introduction with fade-in animation */}
      <section className="section container text-center">
        <h2 className="gradient-text">Welcome to Rajkumar Auto Electricals</h2>
        <p className="intro-text">
          We are your trusted partner for all automotive electrical needs in Balangir.
          Located near Ramai Talkies, we offer a wide range of Exide batteries for bikes, cars, and heavy-duty vehicles.
          With expert installation and genuine warranty support, we ensure your vehicle never stops.
        </p>
      </section>

      {/* Featured Categories with modern cards */}
      <section className="section bg-gradient">
        <div className="container">
          <h2 className="text-center mb-2">Our Products</h2>
          <div className="grid grid-3">
            <div className="card-modern hover-lift">
              <div className="card-icon">🏍️</div>
              <h3>Bike Batteries</h3>
              <p>High-performance batteries for all two-wheelers.</p>
              <Link href="/products?category=Bike" className="link-arrow">Explore →</Link>
            </div>
            <div className="card-modern hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="card-icon">🚗</div>
              <h3>Car Batteries</h3>
              <p>Reliable power for your car's journey.</p>
              <Link href="/products?category=Car" className="link-arrow">Explore →</Link>
            </div>
            <div className="card-modern hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="card-icon">🚛</div>
              <h3>Heavy Duty</h3>
              <p>Durable batteries for trucks and inverters.</p>
              <Link href="/products?category=Heavy%20Duty" className="link-arrow">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight with glassmorphism */}
      <section className="section container">
        <div className="location-box glass">
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
          height: 700px;
          display: flex;
          align-items: center;
          color: white;
          overflow: hidden;
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
          background: rgba(0, 0, 0, 0.5);
        }
        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(227, 30, 36, 0.3) 0%, rgba(179, 18, 23, 0.4) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          opacity: 0;
        }
        .hero-content.animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.95;
          text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-outline-white {
          border: 2px solid white;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .btn-outline-white:hover {
          background: white;
          color: var(--primary-red);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
        }
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        .particle:nth-child(1) {
          width: 80px;
          height: 80px;
          left: 10%;
          top: 20%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          width: 60px;
          height: 60px;
          right: 15%;
          top: 40%;
          animation-delay: 2s;
        }
        .particle:nth-child(3) {
          width: 100px;
          height: 100px;
          left: 50%;
          bottom: 20%;
          animation-delay: 4s;
        }
        .section {
          padding: 5rem 0;
        }
        .bg-gradient {
          background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
          position: relative;
        }
        .bg-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary-red) 50%, transparent 100%);
        }
        .intro-text {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.15rem;
          color: var(--text-light);
          line-height: 1.8;
        }
        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .hover-lift {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }
        .link-arrow {
          color: var(--primary-red);
          font-weight: 600;
          margin-top: 1rem;
          display: inline-block;
          transition: all 0.3s;
        }
        .link-arrow:hover {
          transform: translateX(5px);
        }
        .location-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(249, 249, 249, 0.9) 100%);
          padding: 4rem;
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(227, 30, 36, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }
        .location-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        }
        .location-text p {
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .hero {
            height: 600px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .location-box {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
