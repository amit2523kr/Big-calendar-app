import React, { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedDateData, setShowModal } from '../redux/calendarSlice';
import { getDataForDate } from '../utils/dateUtils';
import { sampleData } from '../data/sampleData';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarComponent.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const { events, selectedDate } = useSelector(state => state.calendar);

  // Convert serialized events back to Date objects for react-big-calendar
  const calendarEvents = useMemo(() => {
    return events.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  }, [events]);

  const selectedDateObj = selectedDate ? new Date(selectedDate) : null;

  const handleSelectSlot = (slotInfo) => {
    const date = slotInfo.start;
    const dateData = getDataForDate(date, sampleData);
    
    dispatch(setSelectedDate(date));
    dispatch(setSelectedDateData(dateData));
    dispatch(setShowModal(true));
  };

  const eventPropGetter = (event) => {
    const hasData = event.data && event.data.length > 0;
    return {
      className: hasData ? 'has-data-event' : 'no-data-event',
      style: {
        backgroundColor: hasData ? '#3174ad' : '#90cdf4',
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  const dayPropGetter = (date) => {
    const dateStr = moment(date).format('YYYY-MM-DD');
    const hasData = sampleData[dateStr];
    const isSelected = selectedDateObj && moment(selectedDateObj).format('YYYY-MM-DD') === dateStr;
    
    return {
      className: `calendar-day ${hasData ? 'has-data' : ''} ${isSelected ? 'selected-day' : ''}`,
    };
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectSlot={handleSelectSlot}
        selectable
        views={['month', 'week', 'day']}
        defaultView="month"
        eventPropGetter={eventPropGetter}
        dayPropGetter={dayPropGetter}
        popup
      />
    </div>
  );
};

export default CalendarComponent;