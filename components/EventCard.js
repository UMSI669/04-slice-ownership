import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { eventSaved, eventUnsaved } from '../features/savedEvents/savedEventsSlice';
import { selectIsEventSaved } from '../features/savedEvents/savedEventsSelectors';
import { styles } from '../styles';

export default function EventCard({ event, compact = false }) {
  const dispatch = useDispatch();
  const isSaved = useSelector((state) => selectIsEventSaved(state, event.id));

  function toggleSaved() {
    dispatch(isSaved ? eventUnsaved(event.id) : eventSaved(event.id));
  }

  return (
    <View style={[styles.eventCard, compact && styles.eventCardCompact]}>
      <View style={styles.eventTopRow}>
        <View style={styles.timePill}><Text style={styles.timeText}>{event.time}</Text></View>
        <View style={styles.eventBadges}>
          <Text style={styles.trackTag}>{event.track.toUpperCase()}</Text>
          <Text style={[styles.availabilityTag, event.available ? styles.available : styles.waitlist]}>
            {event.available ? '● Spots available' : '◷ Waitlist only'}
          </Text>
        </View>
      </View>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <View style={styles.eventMetaRow}>
        <Text style={styles.eventMeta}>{event.speaker}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.eventMeta}>{event.duration}</Text>
      </View>
      <Pressable
        onPress={toggleSaved}
        accessibilityRole="button"
        accessibilityLabel={`${isSaved ? 'Unsave' : 'Save'} ${event.title}`}
        style={[styles.saveButton, isSaved && styles.saveButtonSaved]}
      >
        <Text style={[styles.saveButtonText, isSaved && styles.saveButtonTextSaved]}>
          {isSaved ? '✓  Saved · Remove' : '+  Save event'}
        </Text>
      </Pressable>
    </View>
  );
}
