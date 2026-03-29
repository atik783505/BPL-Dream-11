import React, { use, useState } from 'react';
import Availableplayer from './Availableplayer';
import Selectedplayer from './Selectedplayer';


const Player = ({ playeData,coin,setCoin }) => {
    const playerData = use(playeData)
    const [selectedType,setselectedType] = useState('available')
    const [selectedPlayer,setselectedPlayer] = useState([])
    return (
        <div className='container mx-auto my-20'>
            <div className='flex justify-between mb-10'>
                {selectedType === 'available'? <p className='text-[28px] font-bold'>Available Players</p>:<p className='text-[28px] font-bold'>Selected Player ({selectedPlayer.length}/{playerData.length})</p>}
                <div>
                    <button onClick={() => setselectedType('available')} className={`btn ${selectedType === 'available'? 'bg-amber-300':'bg-gray-300'} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setselectedType('selected')} className={`btn ${selectedType === 'selected'? 'bg-amber-300':'bg-gray-300'} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
            {selectedType === 'available' ? <Availableplayer playerData={playerData} coin={coin} setCoin={setCoin} setselectedPlayer={setselectedPlayer} selectedPlayer={selectedPlayer}></Availableplayer>:<Selectedplayer selectedPlayer={selectedPlayer} setselectedPlayer={setselectedPlayer} coin={coin} setCoin={setCoin} ></Selectedplayer>    }        
        </div>
    );
};

export default Player;