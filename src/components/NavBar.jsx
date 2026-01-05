import React from 'react'

export default function NavBar({ setCurrentPage }) {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ddd', background:'#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>MAIRIE SHOP</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setCurrentPage('home')}>الرئيسية</button>
          <button onClick={() => setCurrentPage('shop')}>المتجر</button>
          <button onClick={() => setCurrentPage('about')}>من نحن</button>
          <button onClick={() => setCurrentPage('contact')}>تواصل معنا</button>
        </div>
      </div>
    </nav>
  );
}
