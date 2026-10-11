import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRootState } from '../app/selectors';
import { styles } from '../styles';

export default function StateInspector() {
  const [expanded, setExpanded] = useState(false);
  const state = useSelector(selectRootState);

  return (
    <View style={styles.inspectorCard}>
      <Pressable onPress={() => setExpanded((value) => !value)} style={styles.inspectorHeader}>
        <View>
          <Text style={styles.sectionEyebrow}>LIVE REDUX STORE</Text>
          <Text style={styles.inspectorTitle}>State inspector</Text>
        </View>
        <Text style={styles.inspectorToggle}>{expanded ? 'Hide  −' : 'Show  +'}</Text>
      </Pressable>
      {expanded ? <Text selectable style={styles.stateJson}>{JSON.stringify(state, null, 2)}</Text> : null}
    </View>
  );
}
