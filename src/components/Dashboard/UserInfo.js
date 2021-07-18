import React from 'react';
import './UserInfo.scss'
import Skeleton from './Skeleton'
import * as Redux from "react-redux";
import {show} from "../../redux-store/features/popupReducer";
import * as apiUtils from '../../utils/api/api';
import { POPUP_TYPE } from '../../constant/PopupType';
import {useHandleCreateChannel} from '../../utils/hooks/user'

function UserInfo(props) {
  // Declare a new state variable, which we'll call "count"
  const channelInfo = Redux.useSelector((state) => {
    return state.channelInfo
  });

  const dispatch = Redux.useDispatch()

  const userInfo = useHandleCreateChannel('123');

  React.useEffect(()=>{

  })

  const openPopupChannel = () => {
    dispatch(show({popupType: POPUP_TYPE.CREATE_CHANNEL}))
  }


  if(channelInfo.loading){
    return(
      <div className="userInfo">
        <Skeleton width="80px" height="40px"/>
        <Skeleton width="200px" height="40px"/>
      </div>
    )
  }else return (
    <div className="userInfo">
      <div className="userInfo__name">Sang Nguyen</div>
      <div onClick={()=>{openPopupChannel()}} className="userInfo__addFriend">+ Create Channel</div>
    </div>
  );
}
export default React.memo(UserInfo);