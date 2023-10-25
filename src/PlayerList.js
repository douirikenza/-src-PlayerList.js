// src/PlayerList.js
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayerList = () => {
  return (
<div>
      {players.map((pl) => (
        <Player {...pl} />
      ))}
    </div>   
  )
      }
    
      export default PlayerList ;




        
      
