import NavBar from "../../common/navbar";
import CalendarTimeline from "./calendarTimeline";
import SearchBar from "./searchBar";
function Calendar() {
  return (
    <div>
      <NavBar pageName="Calendar" />
      <SearchBar />
      <CalendarTimeline />
    </div>
  );
}

export default Calendar;
