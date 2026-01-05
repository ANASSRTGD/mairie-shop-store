import React from 'react';

export default function ProductCard({ product }) {
  const phoneNumber = '212612345678'; // رقمك في واتساب
  const whatsappMessage = `السلام عليكم، أجي حويني عفاك، أريد شراء: ${product.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const instagramLink = 'https://www.instagram.com/mairie_shop?igsh=c2Y3amtoY3c4MnY0';

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '6px',
      width: '200px',
      textAlign: 'center'
    }}>
      <h3 style={{ fontWeight: 'bold' }}>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{product.price} درهم</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {/* زر واتساب */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          واتساب
        </a>

        {/* زر انستغرام */}
        <a 
          href={instagramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            background: '#C13584',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          انستغرام
        </a>
      </div>
    </div>
  );
}
