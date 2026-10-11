import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../../components/EventCard';
import { savedEventsCleared } from './savedEventsSlice';
import { selectSavedEventCount, selectSavedEvents } from './savedEventsSelectors';
import { styles } from '../../styles';

export default function SavedEventsPanel() {
  const dispatch = useDispatch();
  const savedEvents = useSelector(selectSavedEvents);
  const savedCount = useSelector(selectSavedEventCount);

  return (
    <View style={styles.savedPanel}>
      <View style={styles.savedPanelHeading}>
        <View>
          <Text style={styles.sectionEyebrow}>SAVED EVENTS SLICE</Text>
          <Text style={styles.sectionTitle}>Your saved sessions</Text>
        </View>
        <View style={styles.savedPanelActions}>
          <Text style={styles.savedCount}>{savedCount} saved</Text>
          {savedCount > 0 ? (
            <Pressable onPress={() => dispatch(savedEventsCleared())} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear saved</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
      {savedEvents.length > 0 ? savedEvents.map((event) => (
        <EventCard key={event.id} event={event} compact />
      )) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>♡</Text>
          <Text style={styles.emptyTitle}>No saved sessions yet</Text>
          <Text style={styles.emptyCopy}>Save an event above and it will appear here. Clearing saved events leaves your preferences alone.</Text>
        </View>
      )}
    </View>
  );
}
