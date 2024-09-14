import React, { useState } from "react";
import moment from "moment";
import "./Calendar.css";

const Calendar = () => {
  const [month, setMonth] = useState(moment());
  const [selected, setSelected] = useState(moment().startOf("day"));

  const previousMonth = () => {
    setMonth(month.clone().subtract(1, "month"));
  };

  const nextMonth = () => {
    setMonth(month.clone().add(1, "month"));
  };

  const selectDay = (day) => {
    setSelected(day);
  };

  const renderWeeks = () => {
    let weeks = [];
    let date = month.clone().startOf("month").startOf("week");
    let currentMonthIndex = month.month();

    for (let week = 0; week < 5; week++) {
      let days = [];

      for (let i = 0; i < 7; i++) {
        let isCurrentMonth = date.month() === currentMonthIndex;
        let isToday = date.isSame(new Date(), "day");
        let isSelected = date.isSame(selected, "day");

        days.push(
          <td
            key={date.toString()}
            className={`day ${isCurrentMonth ? "" : "different-month"} ${
              isToday ? "today" : ""
            } ${isSelected ? "selected" : ""}`}
            onClick={() => selectDay(date)}
          >
            {date.date()}
          </td>
        );

        date.add(1, "day");
      }

      weeks.push(<tr key={week}>{days}</tr>);
    }

    return weeks;
  };

  return (
    <div className="calendar mb-3">
      <header className="calendar-header">
        <div className="month-display">
          <span className="month-label">{month.format("MMMM YYYY")}</span>
          <div>
            <span className="arrow" onClick={previousMonth}>
              {"<"}
            </span>
            <span className="arrow" onClick={nextMonth}>
              {">"}
            </span>
          </div>
        </div>
        <div className="day-names my-2">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </header>
      <table>
        <tbody>{renderWeeks()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
