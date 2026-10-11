import { createSlice } from '@reduxjs/toolkit';

export const initialPreferencesState = {
  selectedTrack: 'All',
  sortOrder: 'time',
  showOnlyAvailable: false,
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: initialPreferencesState,
  reducers: {
    trackSelected(state, action) {
      state.selectedTrack = action.payload;
    },
    sortOrderChanged(state, action) {
      state.sortOrder = action.payload;
    },
    availabilityFilterToggled(state) {
      state.showOnlyAvailable = !state.showOnlyAvailable;
    },
    preferencesReset() {
      return initialPreferencesState;
    },
  },
});

export const {
  trackSelected,
  sortOrderChanged,
  availabilityFilterToggled,
  preferencesReset,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
