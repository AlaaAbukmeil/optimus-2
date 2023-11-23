import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useEffect, useRef, useState } from "react";

function CalendarTimeline(props: any) {
//   function cancelDeviceInfo(event: any) {
//     setDeviceInfoDisplay("none");
//   }
//   function showDeviceInfo(event: any, deviceInfo: any) {
//     console.log(deviceInfo);
//     setDeviceInfo(deviceInfo);
//     setDeviceInfoDisplay("flex");
//   }

  const localizer = momentLocalizer(moment);
  let myEventsList: any = [
    {
      start: new Date(),
      end: new Date("11/23/2023"),
      title: `A hauling operation is scheduled between:`,
    },
  ];
  let [meetingInfoDisplay, setMeetingInfoDisplay] = useState("none");
  let [meetingInfo, setMeetingInfo] = useState(myEventsList[0]);
  const clickRef: any = useRef(null);
  const buildMessage = (calEvent: any, eventType: any) => {
    // Replace this with your actual message building logic.
    return `${eventType}: ${
      calEvent.title
    } at ${calEvent.start.toLocaleString()}`;
  };
  useEffect(() => {
    /**
     * What Is This?
     * This is to prevent a memory leak, in the off chance that you
     * teardown your interface prior to the timed method being called.
     */
    return () => {
      window.clearTimeout(clickRef?.current);
    };
  }, []);
  const onSelectEvent = useCallback((calEvent: any) => {
    /**
     * Here we are waiting 250 milliseconds (use what you want) prior to firing
     * our method. Why? Because both 'click' and 'doubleClick'
     * would fire, in the event of a 'doubleClick'. By doing
     * this, the 'click' handler is overridden by the 'doubleClick'
     * action.
     */
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      window.alert(buildMessage(calEvent, "onSelectEvent"));
    }, 250);
  }, []);
  const onSelectSlot = useCallback((slotInfo : any) => {
    /**
     * Here we are waiting 250 milliseconds (use what you want) prior to firing
     * our method. Why? Because both 'click' and 'doubleClick'
     * would fire, in the event of a 'doubleClick'. By doing
     * this, the 'click' handler is overridden by the 'doubleClick'
     * action.
     */
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      window.alert(buildMessage(slotInfo, "onSelectSlot"))
    }, 250)
  }, [])
  return (
    <div className="calendar-container">
      <div className="calendar-title">
        <p>Bookings</p>
      </div>

      <div className="calendar-container-1">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={myEventsList}
          style={{ height: "100vh" }}
          className="calendar"
          onSelectSlot={onSelectSlot}
          onSelectEvent={onSelectEvent}
          selectable
        />
      </div>
    </div>
  );
}

export default CalendarTimeline;
