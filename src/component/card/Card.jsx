import React, { useState } from 'react';
import { FaFlag } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player,coin,setCoin,setselectedPlayer,selectedPlayer }) => {
    const [ischoose,setisChoose] = useState(false)

    const coinHandler = () =>{
        let newCoin = coin - player.price
        if(newCoin >= 0){
            setCoin(newCoin)
        }else{
            toast.error('Not enough money for buy this player')
            return
        }

        toast.success(`${player.name} is selected`)
         setisChoose(true)
         setselectedPlayer([...selectedPlayer,player])
         

    }
    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm container mx-auto pt-3" >
                <figure>
                    <img className='w-full h-[240px]'
                        src={player.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body space-y-4">
                    <div className='flex items-center gap-3'>
                        <img className='w-[28px] rounded-full' src={player.img} alt="" />
                        <h2 className='font-semibold text-[20px]'>{player.name}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3 text-gray-400'>
                            <FaFlag></FaFlag>

                            <h2>{player.nationality}</h2>
                        </div>
                        <h2>{player.position}</h2>
                    </div>
                    <p className='font-semibold'>rating({player.rating})</p>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold'>{player.handed}</h2>
                        <h2>Left handed bowl</h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold'>Price:{player.price}</h2>
                        <button className='btn' onClick={coinHandler} disabled={ischoose?true:false}>{ischoose === true ? 'Selested' : 'Choose Player' }</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;