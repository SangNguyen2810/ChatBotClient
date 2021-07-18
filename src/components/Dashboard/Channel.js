import React from 'react';
import './Channel.scss'
import Skeleton from "./Skeleton";
import * as Redux from "react-redux";



function Channel(props) {
  let {channel = null, lastConversation} = props.data;
  let channelName = '...';
  if(channel != null){
    channelName = channel.channelName;
  }
  if(lastConversation == null){
    lastConversation = '...'
  }
  return(
    <div className="channel">
      <div className="channel__avatarContainer">
        <img className="channel__avatarContainer__avatar" src="user.svg"></img>
      </div>
      <div className="channel__infoContainer">
        <div className="channel__infoContainer__title">{channelName}</div>
        <div className="channel__infoContainer__message">{lastConversation}</div>
      </div>
      <div className="channel__timeContainer">
        <div className="channel__timeContainer__time">13:33</div>
      </div>
    </div>
  )

}

export default React.memo(Channel);