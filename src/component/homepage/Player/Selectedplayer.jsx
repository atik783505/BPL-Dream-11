import React from 'react';
import Selected from './Selected';

const Selectedplayer = ({selectedPlayer,setCoin,coin,setselectedPlayer,setselectedType}) => {
    console.log(selectedPlayer,'sleectedplayer')
    return (
        <div>
            {
              selectedPlayer.length === 0? 
              <div className='text-center p-20'>
                <h2>No player available</h2>
                </div>
                : selectedPlayer.map(player => <Selected player={player} selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} coin={coin} setCoin={setCoin}></Selected>)
                
            }
            <button onClick={()=> setselectedType('available')} className='border btn p-7 rounded-full  border-black'><span className='bg-amber-300 font-bold p-4 rounded-full w-full btn'>Add More Player</span></button>
        </div>
    );
};

export default Selectedplayer;