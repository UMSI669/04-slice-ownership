import { createSelector } from '@reduxjs/toolkit';
import { events } from '../../data/events';

export const selectSavedEventIds = (state) => state.savedEvents.ids;
export const selectSavedEventCount = (state) => state.savedEvents.ids.length;
export const selectIsEventSaved = (state, eventId) => state.savedEvents.ids.includes(eventId);

export const selectSavedEvents = createSelector(
  [selectSavedEventIds],
  (ids) => {
    const savedIds = new Set(ids);
    return events.filter((event) => savedIds.has(event.id));
  }
);
