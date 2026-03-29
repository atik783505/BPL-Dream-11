import React from 'react';
import Selected from './Selected';

const Selectedplayer = ({selectedPlayer,setCoin,coin,setselectedPlayer}) => {
    console.log(selectedPlayer,'sleectedplayer')
    return (
        <div>
            {
                selectedPlayer.map(player => <Selected player={player} selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} coin={coin} setCoin={setCoin}></Selected>)
            }
            
        </div>
    );
};

export default Selectedplayer;