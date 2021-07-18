import React from "react";
import "./PopupManager.scss";
import CreateConversation from "./CreateChannel";
import * as Redux from "react-redux";
import { POPUP_TYPE } from "../../constant/PopupType";
import * as apiUtils from "../../utils/api/api";


function PopupManager(props) {
  const popupManagerState = Redux.useSelector((state) => {
    return state.popupManager;
  });
  const userInfoState = Redux.useSelector((state) => {
    return state.userInfo;
  });

  const handleSubmit = React.useMemo(() => {
    if (popupManagerState.type === POPUP_TYPE.CREATE_CHANNEL) {
      return apiUtils.createChannel;
    }
  }, [popupManagerState]);

  if (popupManagerState.isShowing) {
    return (
      <div className="popupManager">
        <CreateConversation onSubmit={handleSubmit} />
      </div>
    );
  } else return null;
}
export default React.memo(PopupManager);
