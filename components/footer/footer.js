import React from 'react'
import Link from 'next/link'

export const Footer = ({ footerItems }) => {
  return (
    <div style={{ padding: '0px', overflow: 'hidden' }}>
      <div className='footer-container'>
        <div className='footer-items'>
          {footerItems.map((e, i) => {
            return (
              <ul className='footer-ui' key={i}>{e?.items.map((item, index) => {
                return (
                  <li className='footer-item-names' key={index}>
                    <Link href={item?.link}><a target='_blank'>{item?.name}</a></Link>
                  </li>
                )
              })}
              </ul>
            )
          })}
        </div>
      </div>
      <style jsx>{`
                .footer-container{
                  font-family: Poppins Regular;
                  background: linear-gradient(65.47deg,#011e75 32.86%,#0873f8 113.29%);
                  bottom:0;
                  width:100%;
                  color: #fafafa;
                  padding: 1.2rem;
                  overflow: hidden;
                  transform: scale(1.2);
                }
                .footer-items{
                  padding: 70px 120px;
                  display: grid;
                  grid-gap: 20px;
                  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                }
                .footer-ui{
                  list-style: none;
                  padding: 0;
                  margin:0;
                }
                .footer-item-names{
                  margin-bottom: 1.2rem;
                  color:#fafafa;
                  list-style-type:none;
                  font-family: Poppins Regular;
                  font-size: 13px;
                }
                .footer-item-names a:hover{
                  color:#485fc7;
                  cursor:pointer;
                }

                @media (max-width:768px){
                  .footer-container{
                    background: linear-gradient(65.47deg,#011e75 32.86%,#0873f8 113.29%);
                    border-radius: 0;
                    padding: 0;
                  }

                }

                @media (max-width:850px){
                    .footer-container{
                        flex-direction:column;
                        border-radius: 0;
                        transform: scale(1);
                    }
                    .footer-items{
                        width:100%;
                        justify-content:flex-start;
                        padding: 30px;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 15px;
                    }
                }
            `}
      </style>
    </div>
  )
}
