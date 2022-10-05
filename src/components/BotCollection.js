import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({bots}) {
  // Your code here
  // for every bot load the BotCard and the BotSpec component
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map(bot =>{ return(<BotCard bot = {bot}/>)})}
        {bots.map(bot =>{ return(<BotSpecs bot = {bot}/>)})}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
