import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const whatsappNumber = '212765579644'
    const orderOnWhatsApp = product => {
        const msg = `السلام عليكم، أريد طلب: ${product.name} - السعر: ${product.price} DH`
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
              }

                return (
                    <div style={{ padding: '20px' }}>
                          <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '14px' }}>المتجر</h2>
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        {products.map(p => (
                                                  <ProductCard key={p.id} product={p} onOrder={orderOnWhatsApp} />
                                                          ))}
                                                                </div>
                                                                    </div>
                                                                      )
                                                                      }