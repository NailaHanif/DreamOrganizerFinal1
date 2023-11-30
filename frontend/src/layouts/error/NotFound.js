import React, { useState, useEffect } from 'react';

const TimeReminder = () => {
  const [eventDateTime, setEventDateTime] = useState('');
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    // Calculate the remaining time when eventDateTime changes
    if (eventDateTime) {
      const eventTime = new Date(eventDateTime).getTime();
      const currentTime = new Date().getTime();
      const timeDifference = eventTime - currentTime;
      setRemainingTime(formatRemainingTime(timeDifference));
    }
  }, [eventDateTime]);

  const formatRemainingTime = (timeDifference) => {
    if (timeDifference <= 0) return 'Event has already passed';
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days}:days [${hours}h ${minutes}m ${seconds}s]`;
  };

  const handleDateTimeChange = (e) => {
    setEventDateTime(e.target.value);
  };

  return (
    <div className="time-reminder" style={{textAlign:'center',alignItems:'center'}}>
      <h2 style={{textAlign:'center'}}>Time Reminder</h2>
      <div>
        <label style={{color:'#009387'}} >Date and Time:</label>
        <input type="datetime-local" value={eventDateTime} onChange={handleDateTimeChange} />
      </div>
      <div style={{margin:10}}>
        <p style={{color:'blue'}}>Remaining Time:</p>
        <div className="remaining-time-box">{remainingTime}</div>
      </div>
    </div>
  );
};

export default TimeReminder;
