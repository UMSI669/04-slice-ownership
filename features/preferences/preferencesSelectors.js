import { createSelector } from '@reduxjs/toolkit';
import { events } from '../../data/events';

export const selectSelectedTrack = (state) => state.preferences.selectedTrack;
export const selectSortOrder = (state) => state.preferences.sortOrder;
export const selectShowOnlyAvailable = (state) => state.preferences.showOnlyAvailable;

// The visible catalog depends on event data and preference state only—not saved-event state.
export const selectVisibleEvents = createSelector(
  [selectSelectedTrack, selectSortOrder, selectShowOnlyAvailable],
  (selectedTrack, sortOrder, showOnlyAvailable) => events
    .filter((event) => selectedTrack === 'All' || event.track === selectedTrack)
    .filter((event) => !showOnlyAvailable || event.available)
    .sort((a, b) => sortOrder === 'time'
      ? a.time.localeCompare(b.time)
      : a.title.localeCompare(b.title))
);
