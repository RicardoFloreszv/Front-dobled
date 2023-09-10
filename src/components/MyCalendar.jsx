import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendario.css'; // Archivo CSS personalizado

const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const preselectedDates = [
      new Date(2023, 6, 10),
      new Date(2023, 6, 15),
      new Date(2023, 6, 20),
    ];
  
    const tileContent = ({ date, view }) => {
      if (view === 'month' && preselectedDates.some((d) => d.toDateString() === date.toDateString())) {
        return <div className="selected-date-marker">{date.getDate()}</div>;
      }
    };
  
    const handleDateClick = (date) => {
      alert(`Fecha seleccionada: ${date.toLocaleDateString()}`);
    };


  return (
    <div className='mx-auto ml-2 mb-10
                    md:flex justify-center md:mx-auto  md:my-10
    '>
      <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            onClickDay={handleDateClick}
            tileContent={({ date, view }) =>
            view === 'month' && preselectedDates.some((d) => d.toDateString() === date.toDateString()) ? (
                <div className="selected-date-marker">{date.getDate()}</div>
            ) : null
            }
      />
    </div>
  );
};

export default MyCalendar;