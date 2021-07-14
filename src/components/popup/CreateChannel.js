import React, { useState, useEffect } from "react";
import "./CreateConversation.scss";
import {useSelector,useDispatch} from "react-redux";
import {hide} from "../../redux-store/features/popupReducer";
export default function CreateChannel(props) {
  const dispatch = useDispatch()

  const closePopup = () => {
    dispatch(hide())
  };

  return (
    <div className="createChannel">
      <div className="createChannel__title">
        <div className="createChannel__title__content">Create Your Channel</div>
        <div className="createChannel__title__close" onClick={()=>{closePopup()}}>
          <img alt="filter" src="/icon/close.svg" />
        </div>
      </div>
      <div className="createChannel__channelInfo">
        <div className="createChannel__channelInfo__title">
          Your Channel Name
        </div>
        <div className="createChannel__channelInfo__input">
          <input type="text" />
        </div>
      </div>
      <div className="createChannel__channelFooter">
        <button >Create</button>
      </div>
    </div>
  );
}
