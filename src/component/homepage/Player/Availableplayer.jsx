import React from 'react';
import Card from '../../card/Card';

const Availableplayer = ({playerData,coin,setCoin,selectedPlayer,setselectedPlayer}) => {
    return (
        <div>
        <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                playerData.map(player =>  <Card player={player} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer}></Card>)
            }
        </div>
        </div>
    );
};

export default Availableplayer;