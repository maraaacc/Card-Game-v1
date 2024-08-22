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
    const [ name, setName]= useState("");
    const [ plName, setPlName]= useState("");
    const [ asset, setAsset]= useState("");
    return (
        <div>
            {players.map(player=>
            {
                <div className="card">
                <h3>Real name:</h3>
                <p>{player.realName}</p>
                <h3>Player name:</h3>
                <p>{player.playerName}</p>
                <h3>Asset:</h3>
                <p>{player.realName}</p>
            </div>
            })}
            
        </div>
    )
}

export default Card
