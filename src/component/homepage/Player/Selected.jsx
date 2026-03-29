import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

const Selected = ({player}) => {
    return (
        <div className='flex justify-between items-center mb-5 border-1 border-gray-400 p-2 rounded-lg'>
            <div className='flex gap-6 items-center'>
                <img className='w-17 rounded-md' src={player.img} alt="" />
                <div>
                    <h2 className='text-[20px] font-bold'>{player.name}</h2>
                    <p>{player.handed}</p>
                </div>
            </div>
            <button>
                <FaDeleteLeft></FaDeleteLeft>
            </button>
        </div>
    );
};

export default Selected;