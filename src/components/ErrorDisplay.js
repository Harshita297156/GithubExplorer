import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorDisplay = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#ffe5e5', borderRadius: 5, marginVertical: 10 },
  text: { color: '#d9534f', fontSize: 14 },
});

export default ErrorDisplay;
