import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import { selectVisibleEvents } from '../features/preferences/preferencesSelectors';
import { styles } from '../styles';

export default function EventList() {
  const visibleEvents = useSelector(selectVisibleEvents);

  return (
    <View style={styles.listSection}>
      <View style={styles.listHeading}>
        <View>
          <Text style={styles.sectionEyebrow}>STATIC EVENT CATALOG + PREFERENCES</Text>
          <Text style={styles.sectionTitle}>Conference sessions</Text>
        </View>
        <Text style={styles.resultCount}>{visibleEvents.length} shown</Text>
      </View>
      {visibleEvents.length > 0 ? visibleEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      )) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No sessions match these preferences</Text>
          <Text style={styles.emptyCopy}>Choose another track or reset preferences to see more sessions.</Text>
        </View>
      )}
    </View>
  );
}
