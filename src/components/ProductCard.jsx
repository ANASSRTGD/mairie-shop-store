import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const phoneNumber = '+212765579644';
  const whatsappMessage = `السلام عليكم، أريد شراء: ${product.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const instagramLink = 'https://www.instagram.com/mairie_shop?igsh=c2Y3amtoY3c4MnY0';

  return (
    <div style={{
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      width: '250px'
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>{product.description}</p>
        <p style={{ color: '#2ecc71', fontWeight: 'bold', marginBottom: '12px' }}>{product.price} درهم</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              background: '#25D366',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            <FaWhatsapp /> واتساب
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              background: '#C13584',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            <FaInstagram /> انستغرام
          </a>
        </div>
      </div>
    </div>
  );
}
