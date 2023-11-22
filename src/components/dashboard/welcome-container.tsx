import { getTitleDate } from "../../common/functions";
function Welcome() {
  function fullScreen(event: any){
    window.location.href = "/dashboard-full-screen"
  }
  return (
    <div className="welcome-container">
      <div className="welcome-title">
        <p className="welcome-title-1">Welcome to</p>
        <p className="welcome-title-2">Optimus </p>
        <p className="welcome-title-3">V2</p>
        
      </div>
      <div className="title-date">
        <p className="welcome-title-1">{getTitleDate()}</p>
      </div>
    </div>
  );
}

export default Welcome;
