'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    stock: number;
    availableOn: string | null;
}

interface Warranty {
    id: number;
    customerName: string;
    batteryId: string;
    saleDate: string;
    durationMonths: number;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'products' | 'warranties'>('products');
    const [products, setProducts] = useState<Product[]>([]);
    const [warranties, setWarranties] = useState<Warranty[]>([]);
    const [showProductForm, setShowProductForm] = useState(false);
    const [showWarrantyForm, setShowWarrantyForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const router = useRouter();

    // Product form state
    const [productForm, setProductForm] = useState({
        name: '',
        category: 'Bike',
        price: '',
        image: '/images/product_placeholder.png',
        description: '',
        stock: '',
        availableOn: '',
    });

    // Warranty form state
    const [warrantyForm, setWarrantyForm] = useState({
        customerName: '',
        batteryId: '',
        saleDate: '',
        durationMonths: '12',
    });

    useEffect(() => {
        fetchProducts();
        fetchWarranties();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
    };

    const fetchWarranties = async () => {
        const res = await fetch('/api/warranty');
        const data = await res.json();
        setWarranties(data);
    };

    const handleProductSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';
        const method = editingProduct ? 'PUT' : 'POST';

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productForm),
        });

        setShowProductForm(false);
        setEditingProduct(null);
        setProductForm({
            name: '',
            category: 'Bike',
            price: '',
            image: '/images/product_placeholder.png',
            description: '',
            stock: '',
            availableOn: '',
        });
        fetchProducts();
    };

    const handleDeleteProduct = async (id: number) => {
        if (confirm('Delete this product?')) {
            await fetch(`/api/products/${id}`, { method: 'DELETE' });
            fetchProducts();
        }
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setProductForm({
            name: product.name,
            category: product.category,
            price: product.price.toString(),
            image: product.image,
            description: '',
            stock: product.stock.toString(),
            availableOn: product.availableOn || '',
        });
        setShowProductForm(true);
    };

    const handleWarrantySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/warranty', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(warrantyForm),
        });

        setShowWarrantyForm(false);
        setWarrantyForm({
            customerName: '',
            batteryId: '',
            saleDate: '',
            durationMonths: '12',
        });
        fetchWarranties();
    };

    const handleDeleteWarranty = async (id: number) => {
        if (confirm('Delete this warranty record?')) {
            await fetch(`/api/warranty?id=${id}`, { method: 'DELETE' });
            fetchWarranties();
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button onClick={() => router.push('/')} className="btn-secondary">
                    View Site
                </button>
            </div>

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'products' ? 'active' : ''}`}
                    onClick={() => setActiveTab('products')}
                >
                    Products
                </button>
                <button
                    className={`tab ${activeTab === 'warranties' ? 'active' : ''}`}
                    onClick={() => setActiveTab('warranties')}
                >
                    Warranties
                </button>
            </div>

            {activeTab === 'products' && (
                <div className="tab-content">
                    <div className="section-header">
                        <h2>Manage Products</h2>
                        <button onClick={() => setShowProductForm(true)} className="btn-primary">
                            + Add Product
                        </button>
                    </div>

                    {showProductForm && (
                        <div className="form-modal">
                            <div className="modal-content">
                                <h3>{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
                                <form onSubmit={handleProductSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input
                                                type="text"
                                                value={productForm.name}
                                                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select
                                                value={productForm.category}
                                                onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                                            >
                                                <option>Bike</option>
                                                <option>Car</option>
                                                <option>Heavy Duty</option>
                                                <option>Inverters</option>
                                                <option>Inverter Batteries</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Price (₹)</label>
                                            <input
                                                type="number"
                                                value={productForm.price}
                                                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Stock</label>
                                            <input
                                                type="number"
                                                value={productForm.stock}
                                                onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Image URL</label>
                                        <input
                                            type="text"
                                            value={productForm.image}
                                            onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Available On (if out of stock)</label>
                                        <input
                                            type="date"
                                            value={productForm.availableOn}
                                            onChange={(e) => setProductForm({ ...productForm, availableOn: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-actions">
                                        <button type="submit" className="btn-primary">Save</button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowProductForm(false);
                                                setEditingProduct(null);
                                            }}
                                            className="btn-secondary"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Available On</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.availableOn ? new Date(product.availableOn).toLocaleDateString() : '-'}</td>
                                    <td>
                                        <button onClick={() => handleEditProduct(product)} className="btn-edit">Edit</button>
                                        <button onClick={() => handleDeleteProduct(product.id)} className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'warranties' && (
                <div className="tab-content">
                    <div className="section-header">
                        <h2>Manage Warranties</h2>
                        <button onClick={() => setShowWarrantyForm(true)} className="btn-primary">
                            + Add Warranty
                        </button>
                    </div>

                    {showWarrantyForm && (
                        <div className="form-modal">
                            <div className="modal-content">
                                <h3>Add Warranty Record</h3>
                                <form onSubmit={handleWarrantySubmit}>
                                    <div className="form-group">
                                        <label>Customer Name</label>
                                        <input
                                            type="text"
                                            value={warrantyForm.customerName}
                                            onChange={(e) => setWarrantyForm({ ...warrantyForm, customerName: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Battery Serial Number / ID</label>
                                        <input
                                            type="text"
                                            value={warrantyForm.batteryId}
                                            onChange={(e) => setWarrantyForm({ ...warrantyForm, batteryId: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Sale Date</label>
                                            <input
                                                type="date"
                                                value={warrantyForm.saleDate}
                                                onChange={(e) => setWarrantyForm({ ...warrantyForm, saleDate: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Warranty Duration (Months)</label>
                                            <input
                                                type="number"
                                                value={warrantyForm.durationMonths}
                                                onChange={(e) => setWarrantyForm({ ...warrantyForm, durationMonths: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-actions">
                                        <button type="submit" className="btn-primary">Save</button>
                                        <button
                                            type="button"
                                            onClick={() => setShowWarrantyForm(false)}
                                            className="btn-secondary"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Battery ID</th>
                                <th>Sale Date</th>
                                <th>Duration (Months)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {warranties.map((warranty) => (
                                <tr key={warranty.id}>
                                    <td>{warranty.customerName}</td>
                                    <td>{warranty.batteryId}</td>
                                    <td>{new Date(warranty.saleDate).toLocaleDateString()}</td>
                                    <td>{warranty.durationMonths}</td>
                                    <td>
                                        <button onClick={() => handleDeleteWarranty(warranty.id)} className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <style jsx>{`
        .admin-dashboard {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid #eee;
        }
        .tab {
          padding: 1rem 2rem;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #666;
          border-bottom: 3px solid transparent;
          transition: all 0.3s;
        }
        .tab.active {
          color: var(--primary-red);
          border-bottom-color: var(--primary-red);
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .btn-primary {
          background: var(--primary-red);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-secondary {
          background: #666;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .data-table th,
        .data-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        .data-table th {
          background: #f9f9f9;
          font-weight: 600;
        }
        .btn-edit,
        .btn-delete {
          padding: 6px 12px;
          margin-right: 0.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .btn-edit {
          background: #007bff;
          color: white;
        }
        .btn-delete {
          background: #dc3545;
          color: white;
        }
        .form-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
      `}</style>
        </div>
    );
}
