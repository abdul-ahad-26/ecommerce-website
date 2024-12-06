import React from 'react'
import Image  from "next/image";

const Header = () => {
    return (
        <div className="top-header">
            <div className="promo-banner">
                <div className="promotion">
                    <p className="promotion-text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <p className="shopnow">ShopNow</p>
                </div>

                <div className="language-selector">
                 <p>English</p>
                <Image className='dropdown' src="/vector.png" alt="dropdown" width={7.78} height={12.73}></Image>
                


                </div>

                




            </div>

        </div>
        
    )
}

export default Header