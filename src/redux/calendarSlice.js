import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  selectedDate: null,
  selectedDateData: null,
  showModal: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      // Convert events to serializable format
      state.events = action.payload.map(event => ({
        ...event,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
      }));
    },
    setSelectedDate: (state, action) => {
      // Store date as ISO string for serialization
      state.selectedDate = action.payload ? action.payload.toISOString() : null;
    },
    setSelectedDateData: (state, action) => {
      state.selectedDateData = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setEvents, setSelectedDate, setSelectedDateData, setShowModal } = calendarSlice.actions;
export default calendarSlice.reducer;