import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadingIndicator() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
