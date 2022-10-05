import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, filterBots}) {
  // Your code here
  // for every bot load the BotCard and the BotSpec component
  const handleDelete = (id) =>{
    filterBots(id)
  }
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(bot =>{ return(<BotCard key={bot.id} bot = {bot} handleDelete={handleDelete}/>)})}
        {bots.map(bot =>{ return(<BotSpecs key={bot.id} bot = {bot}/>)})}
      </div>
    </div>
  );
}

export default BotCollection;
