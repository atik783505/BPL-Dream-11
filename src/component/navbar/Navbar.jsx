import React from 'react';
import logoimg from '../../assets/dollar 1.png'

const Navbar = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <p>{coin} Coin</p>
                        <img src={logoimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;