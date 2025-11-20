import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEvents } from './redux/calendarSlice';
import { sampleData } from './data/sampleData';
import { convertSampleDataToEvents } from './utils/dateUtils';
import CalendarComponent from './components/CalendarComponent';
import DataModal from './components/DataModal';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const events = convertSampleDataToEvents(sampleData);
    dispatch(setEvents(events));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Calendar Data Visualization App</h1>
        <p>Click on dates to view data and bar charts</p>
      </header>
      
      <main className="app-main">
        <CalendarComponent />
        <DataModal />
      </main>
    </div>
  );
}

export default App;