import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  //create state to hold your bots data
  const [bots, setBots] = useState([])
  useEffect(() =>{
    fetch('http://localhost:8002/bots').then(res => res.json())
    .then(data => setBots(data))
  },[])
  const filterBots = (id) =>{
    setBots(bots.filter((bot) => bot.id !==id))
  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots ={bots} filterBots ={filterBots}/>
    </div>
  )
}

export default BotsPage;
