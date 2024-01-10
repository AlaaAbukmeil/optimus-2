import { useState, useRef, useCallback } from "react";

function ContextMenu(props: any) {
  

  if (props.contextMenuState.visible) {
    return (
      <div
        
        style={{
          position: "absolute",
          top: props.contextMenuState.y,
          left: props.contextMenuState.x,
        }}
        className="context-menu-container"
      >
        <div className="context-menu">
          <p className="context-menu-text" onClick={(event) => props.setEditLocationDisplay(true) & props.setEditLocationInfo(props.contextMenuState.data)}>Edit Resource</p>
        </div>
        

        <hr className="hr" />
        <div className="context-menu">
          <p className="context-menu-text" onClick={(event) => props.setDeleteLocationDisplay(true) & props.setDeleteLocationInfo(props.contextMenuState.data)}>Delete Resource</p>
        </div>
      </div>
    );
  }else{
    return (<div></div>)
  }
}

export default ContextMenu;
