import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TRACKS } from '../data/events';
import {
  availabilityFilterToggled,
  preferencesReset,
  sortOrderChanged,
  trackSelected,
} from '../features/preferences/preferencesSlice';
import {
  selectSelectedTrack,
  selectShowOnlyAvailable,
  selectSortOrder,
} from '../features/preferences/preferencesSelectors';
import { styles } from '../styles';

function Choice({ label, selected, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.choice, selected && styles.choiceSelected]}>
      <Text style={[styles.choiceText, selected && styles.choiceTextSelected]}>{label}</Text>
    </Pressable>
  );
}

export default function FilterPanel() {
  const dispatch = useDispatch();
  const selectedTrack = useSelector(selectSelectedTrack);
  const sortOrder = useSelector(selectSortOrder);
  const showOnlyAvailable = useSelector(selectShowOnlyAvailable);

  return (
    <View style={styles.filterCard}>
      <View style={styles.filterHeading}>
        <View>
          <Text style={styles.sectionEyebrow}>PREFERENCES SLICE</Text>
          <Text style={styles.sectionTitle}>Find your sessions</Text>
        </View>
        <Pressable onPress={() => dispatch(preferencesReset())} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset preferences</Text>
        </Pressable>
      </View>

      <Text style={styles.filterLabel}>TRACK</Text>
      <View style={styles.choiceRow}>
        {TRACKS.map((track) => (
          <Choice key={track} label={track} selected={selectedTrack === track} onPress={() => dispatch(trackSelected(track))} />
        ))}
      </View>

      <View style={styles.filterBlock}>
        <Text style={styles.filterLabel}>SORT ORDER</Text>
        <View style={styles.choiceRow}>
          <Choice label="Time" selected={sortOrder === 'time'} onPress={() => dispatch(sortOrderChanged('time'))} />
          <Choice label="Title" selected={sortOrder === 'title'} onPress={() => dispatch(sortOrderChanged('title'))} />
        </View>
      </View>

      <Pressable
        onPress={() => dispatch(availabilityFilterToggled())}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: showOnlyAvailable }}
        style={styles.availableToggle}
      >
        <View style={[styles.checkbox, showOnlyAvailable && styles.checkboxChecked]}>
          {showOnlyAvailable ? <Text style={styles.checkmark}>✓</Text> : null}
        </View>
        <View>
          <Text style={styles.availableTitle}>Show available sessions only</Text>
          <Text style={styles.availableHelp}>Hides sessions marked “Waitlist only”</Text>
        </View>
      </Pressable>
    </View>
  );
}
