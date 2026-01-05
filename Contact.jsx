import React from 'react'

export default function Contact() {
  const whatsappNumber = '212765579644'
    return (
        <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '12px' }}>تواصل معنا</h2>
                    <p>للطلب أو الاستفسار، تواصل عبر واتساب أو تابعنا على إنستغرام:</p>
                          <p style={{ margin: '12px 0' }}>
                                  📞 واتساب: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">{whatsappNumber}</a>
                                        </p>
                                              <p>
                                                      📸 إنستغرام:&nbsp;
                                                              <a
                                                                        href="https://www.instagram.com/mairie_shop?igsh=c2Y3amtoY3c4MnY0"
                                                                                  target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                                    >
                                                                                                              @mairie_shop
                                                                                                                      </a>
                                                                                                                            </p>
                                                                                                                                </div>
                                                                                                                                  )
                                                                                                                                  }