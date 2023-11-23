import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Box4(props: any) {
  const localizer = momentLocalizer(moment);
  let myEventsList: any = [
    {
      start: new Date(),
      end: new Date("09/01/2023"),
      title: `A hauling operation is scheduled between:`,
    },
  ];

  return (
    <div className="box-4">
      <div className="occupancy-box-1">
        <div className="occupancy-box-1-1">
          <p>Bookings</p>
          
        </div>
        <div className="occupancy-box-1-2">
          <p className="occ-status-text">Status: Available</p>
        </div>
      </div>
      <div className="calendar-react-container">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView={props.mode}
          events={myEventsList}
          style={{ height: "100vh" }}
          className="box-4-calendar"
        />
      </div>
    </div>
  );
}

export default Box4;
