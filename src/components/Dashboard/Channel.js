import React from 'react';
import './Channel.scss'
import Skeleton from "./Skeleton";
import * as Redux from "react-redux";



function Channel(props) {
  

  return(
    <div className="channel">
      <div className="channel__avatarContainer">
        <img className="channel__avatarContainer__avatar" src="user.svg"></img>
      </div>
      <div className="channel__infoContainer">
        <div className="channel__infoContainer__title">Sang</div>
        <div className="channel__infoContainer__message">Sang rất đẹp trai</div>
      </div>
      <div className="channel__timeContainer">
        <div className="channel__timeContainer__time">13:33</div>
      </div>
    </div>
  )

}

export default React.memo(Channel);