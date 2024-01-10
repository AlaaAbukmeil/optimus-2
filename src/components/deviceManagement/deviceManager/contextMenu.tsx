
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
          <p className="context-menu-text" onClick={(event) => props.setEditDeviceDisplay(true) & props.setEditDeviceInfo(props.contextMenuState.data)}>Edit Device</p>
        </div>
        

        <hr className="hr" />
        <div className="context-menu">
          <p className="context-menu-text" onClick={(event) => props.setDeleteDeviceDisplay(true) & props.setDeleteDeviceInfo(props.contextMenuState.data)}>Delete Device</p>
        </div>
      </div>
    );
  }else{
    return (<div></div>)
  }
}

export default ContextMenu;
