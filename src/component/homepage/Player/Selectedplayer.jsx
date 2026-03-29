import React from 'react';
import Selected from './Selected';

const Selectedplayer = ({selectedPlayer,setCoin,coin,setselectedPlayer}) => {
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
            
        </div>
    );
};

export default Selectedplayer;