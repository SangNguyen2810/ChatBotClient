import React from "react";
import "./CreateConversation.scss";
import * as Redux  from "react-redux";
import { hide } from "../../redux-store/features/popupReducer";
import { useHandleCreateChannel } from "../../utils/hooks/user";

function CreateChannel(props) {
  const [channelName, setChannelName] = React.useState('');
  const dispatch = Redux.useDispatch();
  const {onSubmit} = props;

  const closePopup = () => {
    dispatch(hide());
  };

  const handleOnChangeInput = (e) => {
    setChannelName(e.target.value);
  };

  const handleOnClickCreate = (e)=>{
    if(onSubmit && typeof (onSubmit) === 'function'){
      onSubmit(channelName)
      .then((data)=>{
        console.log('data: ',data);
        closePopup();
      })
      .catch((err)=>{
        console.log('err: ',err);
        closePopup();
      })
    }
  }

  return (
    <div className="createChannel">
      <div className="createChannel__title">
        <div className="createChannel__title__content">Create Your Channel</div>
        <div
          className="createChannel__title__close"
          onClick={() => {
            closePopup();
          }}
        >
          <img alt="filter" src="/icon/close.svg" />
        </div>
      </div>
      <div className="createChannel__channelInfo">
        <div className="createChannel__channelInfo__title">
          Your Channel Name
        </div>
        <div className="createChannel__channelInfo__input">
          <input
            type="text"
            placeholder="Your Channel Name"
            onChange={(e) => {
              handleOnChangeInput(e);
            }}
          />
        </div>
      </div>
      <div className="createChannel__channelFooter">
        <button onClick={handleOnClickCreate}>Create</button>
      </div>
    </div>
  );
}

export default React.memo(CreateChannel);
