import React from 'react';
import bgfooter from '../../assets/bg-shadow.png'

const Footer = () => {
    return (
        <div>
            <div >
                <div className='text-center p-20 w-10/12 m-[4] mx-auto h-[300px] space-y-4' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,0.8)),
,url(${bgfooter})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                }}>
                    <h2 className='text-[32px] font-bold'>Subscribe to our Newsletter</h2>
                    <p className='text-5 text-[#131313]'>Get the latest updates and news right in your inbox!</p>
                    <input className='p-2 mr-4 border border-gray-400 rounded-lg' type="email" name="" id="" placeholder='enter your email' />
                    <button className='btn bg-amber-300 p-4 rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;