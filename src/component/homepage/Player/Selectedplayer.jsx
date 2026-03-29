import React from 'react';
import Selected from './Selected';

const Selectedplayer = ({selectedPlayer}) => {
    console.log(selectedPlayer,'sleectedplayer')
    return (
        <div>
            {
                selectedPlayer.map(player => <Selected player={player}></Selected>)
            }
            
        </div>
    );
};

export default Selectedplayer;