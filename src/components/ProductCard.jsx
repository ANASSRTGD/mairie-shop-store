import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // أيقونات واتساب وإنستغرام

export default function ProductCard({ product }) {
  const phoneNumber = '+212765579644';
  const whatsappMessage = `السلام عليكم، أجي حويني عفاك، أريد شراء: ${product.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const instagramLink = 'https://www.instagram.com/mairie_shop?igsh=c2Y3amtoY3c4MnY0';

  return (
    <div style={{
      border: '1px solid #eee',
      padding: '20px',
      borderRadius: '12px',
      width: '220px',
      textAlign: 'center',
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px', color: '#333' }}>{product.name}</h3>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{product.description}</p>
      <p style={{ color: '#2ecc71', fontWeight: 'bold', marginBottom: '15px' }}>{product.price} درهم</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* زر واتساب */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          <FaWhatsapp /> واتساب
        </a>

        {/* زر انستغرام */}
        <a 
          href={instagramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            background: '#C13584',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          <FaInstagram /> انستغرام
        </a>
      </div>
    </div>
  );
}
