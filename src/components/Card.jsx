import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
let players=[
    {
      "asset": "Foghammer Lead",
      "playerName": "Dreamlurk The Unstoppable",
      "realName": "Brianna Forbes"
    },
    {
      "asset": "Secret Glowquake Gold",
      "playerName": "Crystaldash",
      "realName": "Darcy Candice Ball"
    },
    {
      "asset": "Valkyries' Opal Adamant",
      "playerName": "Seekvenom The Mystic",
      "realName": "Elva Becky Hammond"
    },
    {
      "asset": "Jewelevil Bronze Of Goddesses",
      "playerName": "Coincurse The Ghoul",
      "realName": "Enid Rose"
    },
    {
      "asset": "Yellow Orichalcum Of Paladins",
      "playerName": "Skulldart",
      "realName": "Esmeralda Carrillo"
    },
    {
      "asset": "Shifting Rainshadow Iron",
      "playerName": "Speedsoul",
      "realName": "Hillary Gibbs"
    }
  ]
const Card = () => {
    return (
        <div> 
          <div className="card">
                <h3>Real name:</h3>
                  <p className="rName"></p>
                <h3>Player name:</h3>
                  <p className="pName"></p>
                <h3>Asset:</h3>
                  <p className="asset"></p>
              </div>     
            {players.map(player=>
            {
              <div className="card">
                <h3>Real name:</h3>
                  <p className="rName">{player.realName}</p>
                <h3>Player name:</h3>
                  <p className="pName">{player.playerName}</p>
                <h3>Asset:</h3>
                  <p className="asset">{player.asset}</p>
              </div>
              console.log(player.playerName);
              console.log(player.realName);
              console.log(player.asset);
              console.log("");
            })}
            
        </div>
    )
}

export default Card
