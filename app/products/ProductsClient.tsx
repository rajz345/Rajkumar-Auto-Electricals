'use client';

import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { Product } from '@prisma/client';

interface ProductsClientProps {
    products: any[];
    category?: string;
}

export default function ProductsClient({ products, category }: ProductsClientProps) {
    const categories = ['Bike', 'Car', 'Heavy Duty', 'Inverters', 'Inverter Batteries'];

    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Browse our wide range of high-performance batteries.</p>
                </div>
            </div>

            <div className="container section">
                {/* Filter Tabs */}
                <div className="filters mb-2">
                    <Link
                        href="/products"
                        className={`filter-btn ${!category ? 'active' : ''}`}
                    >
                        All
                    </Link>
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={`/products?category=${encodeURIComponent(cat)}`}
                            className={`filter-btn ${category === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-products">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-4">
                        <p>No products found in this category.</p>
                    </div>
                )}
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
        .filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 8px 20px;
          border-radius: 20px;
          border: 1px solid #ddd;
          color: #666;
          transition: all 0.3s;
        }
        .filter-btn:hover, .filter-btn.active {
          background-color: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }
        .grid-products {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .py-4 {
          padding: 4rem 0;
        }
      `}</style>
        </div>
    );
}
