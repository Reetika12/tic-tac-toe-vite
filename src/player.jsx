import React, { useState } from "react";

function Player({winner,turn})
{
    return <div>
       {winner && <div style={{color:"green",fontSize:"20px"}}>{winner}</div>}
         <div>Player 1: 0</div>
         <div>Player 2: X</div>
    </div>
}

export default Player