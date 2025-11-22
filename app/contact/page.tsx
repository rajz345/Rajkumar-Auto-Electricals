'use client';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or assistance.</p>
        </div>
      </div>

      <div className="container section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Visit Our Shop</h2>
            <div className="info-item">
              <h3>Address</h3>
              <p>Rajkumar Auto Electricals</p>
              <p>Near Ramai Talkies</p>
              <p>Balangir, Odisha, 767001</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91-7077717401</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>rajkumarautoelectric@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="map-container">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.678901234567!2d83.4833!3d20.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQzJzAwLjEiTiA4M8KwMjknMDAuMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Rajkumar Auto Electricals Location"
            ></iframe>
            <p className="text-small mt-1 text-center">
              *Map location is approximate based on "Near Ramai Talkies, Balangir".
            </p>
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
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }
        .info-item {
          margin-bottom: 2rem;
        }
        .info-item h3 {
          color: var(--primary-red);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .map-container {
          background: #eee;
          min-height: 450px;
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
