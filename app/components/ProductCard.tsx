'use client';

import Image from 'next/image';
import { Product } from '@prisma/client';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.stock <= 0;
  const availableDate = product.availableOn ? new Date(product.availableOn).toLocaleDateString() : 'Unknown';

  return (
    <div className="product-card">
      <div className="image-container">
        <Image
          src={product.image || '/images/product_placeholder.png'}
          alt={product.name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="content">
        <div className="category-tag">{product.category}</div>
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toFixed(2)}</p>

        <div className={`stock-status ${isOutOfStock ? 'out-of-stock' : 'in-stock'}`}>
          {isOutOfStock ? (
            <span>Out of Stock {product.availableOn && <span className="available-date">(Available: {availableDate})</span>}</span>
          ) : (
            <span>In Stock</span>
          )}
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-4px);
        }
        .image-container {
          position: relative;
          height: 200px;
          width: 100%;
          background: #f9f9f9;
          padding: 1rem;
          overflow: hidden;
        }
        .image-container :global(img) {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain !important;
        }
        .content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .category-tag {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          background: none;
          -webkit-text-fill-color: var(--text-dark);
        }
        .price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-red);
          margin-bottom: 1rem;
        }
        .stock-status {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .in-stock {
          color: #28a745;
        }
        .out-of-stock {
          color: #dc3545;
        }
        .available-date {
          display: block;
          font-size: 0.8rem;
          font-weight: 400;
          color: #666;
        }
        .w-full {
          width: 100%;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          border-color: #ccc;
          color: #999;
        }
      `}</style>
    </div>
  );
}
