import React from "react";
import "./ScrollBar.scss";

function ScrollBar(props) {
  const [opacity, setOpacity] = React.useState(1);
  let timeout = React.useRef(null);
  const showScrollBar = React.useCallback(() => {
   
    if(timeout.current) {
      clearTimeout(timeout)
      timeout.current = null;
    }
    setOpacity(1);
    timeout.current = setTimeout(() =>{
      hideScrollBar();
    },2000)
  }, [props]);
  const hideScrollBar = React.useCallback(() => {
    setOpacity(0);
  }, [props]);

  return (
    <div
      className="scrollBar"
      style={{ opacity: opacity }}
      onMouseOver={showScrollBar}
    >
      <div className="scrollBar__item"></div>
    </div>
  );
}

export default React.memo(ScrollBar);
