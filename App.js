import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import FilterPanel from './components/FilterPanel';
import EventList from './components/EventList';
import StoreMap from './components/StoreMap';
import StateInspector from './components/StateInspector';
import SavedEventsPanel from './features/savedEvents/SavedEventsPanel';
import { styles } from './styles';

function ConferencePlanner() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>REDUX TOOLKIT · DOMAIN OWNERSHIP</Text>
          <Text style={styles.heroTitle}>Conference planner</Text>
          <Text style={styles.heroCopy}>
            Organize client-owned state by the business concern it supports—not by the screen displaying it.
          </Text>
        </View>

        <StoreMap />
        <FilterPanel />
        <EventList />
        <SavedEventsPanel />
        <StateInspector />

        <View style={styles.questionsCard}>
          <Text style={styles.sectionEyebrow}>A STATE-DESIGN CHECK</Text>
          <Text style={styles.questionsTitle}>Ask these questions about each value</Text>
          <View style={styles.questionRow}><Text style={styles.questionMark}>01</Text><Text style={styles.questionText}>Who owns this value?</Text></View>
          <View style={styles.questionRow}><Text style={styles.questionMark}>02</Text><Text style={styles.questionText}>Which business event changes it?</Text></View>
          <View style={styles.questionRow}><Text style={styles.questionMark}>03</Text><Text style={styles.questionText}>Is it client-owned or server-owned?</Text></View>
          <View style={styles.questionRow}><Text style={styles.questionMark}>04</Text><Text style={styles.questionText}>Is it source state or derived state?</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ConferencePlanner />
    </Provider>
  );
}
