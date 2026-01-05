import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const dummyOrder = () => {} // لاستخدام عرض المنتجات فقط هنا
    return (
        <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>مرحبا بكم في MAIRIE SHOP</h2>
                    <p style={{ marginBottom: '20px' }}>ملابس قطنية نسائية بجودة عالية وأسعار مناسبة</p>

                          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' }}>منتجات مختارة</h3>
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        {products.slice(0, 3).map(p => (
                                                  <ProductCard key={p.id} product={p} onOrder={dummyOrder} />
                                                          ))}
                                                                </div>
                                                                    </div>
                                                                      )
                                                                      }
