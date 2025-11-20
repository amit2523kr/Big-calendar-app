import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './calendarSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['calendar/setEvents', 'calendar/setSelectedDate'],
        ignoredPaths: ['calendar.events', 'calendar.selectedDate'],
      },
    }),
});