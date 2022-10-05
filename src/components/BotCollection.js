import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots}) {
  // Your code here
  // for every bot load the BotCard and the BotSpec component

/*   //create a state to hold enlisted bots
  const [enlistedBots, setEnlistedBots] = useState([])
  function addToArmy(bot){
    const newEnlist =[...enlistedBots,bot]
    setEnlistedBots(newEnlist)
  }
  // when the enlistedBots changes add a botArmy card
  useEffect(() =>{
    enlistedBots.map((bot) =>{return(<YourBotArmy bot ={bot} />)})
  },[enlistedBots]) */
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(bot =>{ return(<BotCard key={bot.id} bot = {bot}/>)})}
        {bots.map(bot =>{ return(<BotSpecs key={bot.id} bot = {bot}/>)})}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
