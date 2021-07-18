import React from 'react';
import './ListChannel.scss'
import Skeleton from "./Skeleton";
import * as Redux from "react-redux";
import Channel from './Channel'


function ListChannel(props) {
  // Declare a new state variable, which we'll call "count"
  const channelInfo = Redux.useSelector((state) => {
    return state.channelInfo
  });

  const MAX_CONVERSATION_SKELETON = 10;
  const listSkeleton = React.useMemo(()=>{
    const skeletons = []
    for(let i = 0; i < MAX_CONVERSATION_SKELETON; i++){
      const ske = <Skeleton key={i} height='80px' style={{marginTop:'20px'}}/>
      skeletons.push(ske);
    }
    return skeletons;
  },[props]);

  const listChannel = React.useMemo(()=>{
    const convs = [];
    console.log("Sang dep trai channelInfo:",channelInfo);
    for(let i = 0; i < MAX_CONVERSATION_SKELETON; i++){
      const conv = <Channel key = {i}/>
      convs.push(conv);
    }
    return convs;
  },[channelInfo])


  if(channelInfo.loading){
    return (
      <div className="listChannel">
        {listSkeleton}
      </div>
    );
  }else return(
    <div className="listChannel">
      {listChannel}
    </div>
  )

}

export default React.memo(ListChannel);