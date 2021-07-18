import React from 'react';
import './ListChannel.scss'
import Skeleton from "./Skeleton";
import * as Redux from "react-redux";
import Channel from './Channel'
import ScrollBar  from './ScrollBar';


function ListChannel(props) {
  // Declare a new state variable, which we'll call "count"

  const [height, setHeight] = React.useState(window.innerHeight - 125);

  React.useEffect(() => {
    
  }, [])
  const channelInfo = Redux.useSelector((state) => {
    return state.channelInfo
  });

  const [transformY, setTransformY] = React.useState(-100);

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
    const {chans = []} = channelInfo;
    console.log("Sang dep trai channelInfo:",channelInfo);
    for(let i = 0; i < chans.length; i++){
      const conv = <Channel key = {i} data={chans[i]}/>
      convs.push(conv);
    }
    return convs;
  },[channelInfo])

  // const handleScroll = e => {
  //   let scrollTop = e.currentTarget.scrollTop;
  //   setTransformY(transformY + e.deltaY);
  // }


  if(channelInfo.loading){
    return (
      <div className="listChannel">
        {listSkeleton}
      </div>
    );
  }else return(
    <div className="listChannel" style={{maxHeight:`${height}px`}}>
      {listChannel}
    </div>
  )

}

export default React.memo(ListChannel);