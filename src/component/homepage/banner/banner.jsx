import React from 'react';
import bannerlogo from '../../../assets/banner-main.png'
import bg from '../../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto text-center mt-3 p-5 bg-black rounded-md' style={{backgroundImage:`url(${bg})`}}>
            <img className=' mx-auto' src={bannerlogo} alt="" />
            <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p>Beyond Boundaries Beyond Limits</p>
            <button>Claim Free Credit</button>
        </div>
    );
};

export default Banner;