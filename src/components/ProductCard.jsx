import React from 'react'

export default function ProductCard({ product, onOrder }) {
  return (
      <div style={{
            border: '1px solid #ddd',
                  borderRadius: '8px',
                        overflow: 'hidden',
                              width: '100%',
                                    maxWidth: '240px',
                                          marginBottom: '16px'
                                              }}>
                                                    <img
                                                            src={product.image}
                                                                    alt={product.name}
                                                                            style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                                                                                  />
                                                                                        <div style={{ padding: '10px' }}>
                                                                                                <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
                                                                                                        <p style={{ margin: '0 0 8px', color: '#b91c1c', fontWeight: 'bold' }}>
                                                                                                                  {product.price} DH
                                                                                                                          </p>
                                                                                                                                  <p style={{ margin: '0 0 12px', fontSize: '14px' }}>
                                                                                                                                            {product.description}
                                                                                                                                                    </p>
                                                                                                                                                            <button
                                                                                                                                                                      onClick={() => onOrder(product)}
                                                                                                                                                                                style={{
                                                                                                                                                                                            width: '100%',
                                                                                                                                                                                                        padding: '8px 0',
                                                                                                                                                                                                                    background: '#16a34a',
                                                                                                                                                                                                                                color: '#fff',
                                                                                                                                                                                                                                            border: 'none',
                                                                                                                                                                                                                                                        borderRadius: '4px',
                                                                                                                                                                                                                                                                    cursor: 'pointer'
                                                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                اطلب عبر واتساب
                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                    }
