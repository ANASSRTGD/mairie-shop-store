import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import products from '../data/products.js';

export default function Home() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '30px',
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
