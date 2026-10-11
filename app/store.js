import { configureStore } from '@reduxjs/toolkit';
import savedEventsReducer from '../features/savedEvents/savedEventsSlice';
import preferencesReducer from '../features/preferences/preferencesSlice';

export const store = configureStore({
  reducer: {
    savedEvents: savedEventsReducer,
    preferences: preferencesReducer,
  },
});
