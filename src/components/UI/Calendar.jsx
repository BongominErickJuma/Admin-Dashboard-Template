import React from "react";

const October2024Calendar = () => {
  const month = "October";
  const year = 2024;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get number of days in October 2024
  const daysInMonth = new Date(year, 10, 0).getDate(); // October is month 9 (0-indexed)

  // Get the starting day of the week for October 2024
  const firstDayOfWeek = new Date(year, 9, 1).getDay();

  const renderDaysOfWeek = () => {
    return (
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const days = [];

    // Empty cells for days before October 1st, 2024
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Actual days of October 2024
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={`day-${day}`} className="calendar-day">
          {day}
        </div>
      );
    }

    return <div className="calendar-grid">{days}</div>;
  };

  return (
    <div className="calendar-container mb-3">
      <h6 className="">
        {month},{year}
      </h6>
      {renderDaysOfWeek()}
      {renderDays()}
    </div>
  );
};

export default October2024Calendar;
