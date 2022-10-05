import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  //create state to hold your bots data
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] =useState([])
  useEffect(() =>{
    fetch('http://localhost:8002/bots').then(res => res.json())
    .then(data => setBots(data))
  },[])
  const filterBots = (id) =>{
    setBots(bots.filter((bot) => bot.id !==id))
    }

  const addedToArmy = (id) =>{
    const newArray = bots.filter((bot) => bot.id ==id)
    setBotArmy(newArray)
    alert(botArmy[0].id)
  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots ={bots} filterBots ={filterBots} addedToArmy={addedToArmy}/>
    </div>
  )
}

export default BotsPage;
