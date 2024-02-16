import React from 'react';
import Banner from '../images/Banner.webp';
import Dis from '../images/dis.webp';
import Coupons from '../images/Coupons.webp';
import Myntra100 from '../images/myntra100.webp';
import Myntra200 from '../images/myntra200.webp';

const GenderBanner = () => {
  return (
    <div>
      <div className='mt-[25px] mt-[60px]'>
        <img src={Banner} alt='Banner' />
      </div>
      <div>
        <img src={Dis} />
      </div>
      <div>
        <img src={Coupons} />
      </div>
      <div className='flex h-[80%]'>
        <div>
          <img src={Myntra100} />
        </div>
        <div>
          <img src={Myntra200} />
        </div>
      </div>
    </div>
  )
}

export default GenderBanner