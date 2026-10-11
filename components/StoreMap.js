import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

function OwnedValue({ path, value, owner, tone }) {
  return (
    <View style={styles.mapRow}>
      <View style={styles.mapValueBlock}>
        <Text style={styles.mapPath}>{path}</Text>
        <Text style={styles.mapValue}>{value}</Text>
      </View>
      <View style={[styles.ownerTag, tone === 'saved' ? styles.savedOwner : styles.preferencesOwner]}>
        <Text style={[styles.ownerText, tone === 'saved' ? styles.savedOwnerText : styles.preferencesOwnerText]}>{owner}</Text>
      </View>
    </View>
  );
}

export default function StoreMap() {
  return (
    <View style={styles.storeMapCard}>
      <Text style={styles.sectionEyebrow}>DOMAIN-ORIENTED STORE MAP</Text>
      <Text style={styles.storeMapTitle}>Each slice owns one business concern</Text>
      <OwnedValue path="savedEvents.ids" value="Saved event IDs" owner="Saved events slice · client-owned" tone="saved" />
      <OwnedValue path="preferences.selectedTrack" value="Selected track" owner="Preferences slice · client-owned" tone="preferences" />
      <OwnedValue path="preferences.sortOrder" value="Sort order" owner="Preferences slice · client-owned" tone="preferences" />
      <OwnedValue path="preferences.showOnlyAvailable" value="Availability filter" owner="Preferences slice · client-owned" tone="preferences" />
      <View style={styles.derivedRow}>
        <Text style={styles.mapPath}>selectVisibleEvents(...)</Text>
        <Text style={styles.derivedLabel}>Derived · static catalog + preferences</Text>
      </View>
      <Text style={styles.serverNote}>Static event catalog: server-owned reference data for this local demo; it is not copied into Redux.</Text>

      <View style={styles.antiExample}>
        <Text style={styles.antiExampleLabel}>ANTI-EXAMPLE · WHAT DOES THIS BELONG TO?</Text>
        <Text style={styles.antiExampleJson}>{'{\n  data: [],\n  selected: [],\n  value: \'UX\',\n  thing: false\n}'}</Text>
        <Text style={styles.antiExamplePrompt}>Spot the ambiguous names, mixed responsibilities, and weak domain boundaries.</Text>
      </View>
    </View>
  );
}
