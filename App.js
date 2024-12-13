import { Readable } from 'readable-stream';  // Proper import for readable-stream
import React from 'react';  // React import for building components
import { View, Text } from 'react-native';  // React Native components

// Your main App component
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, world! This is my first Expo app.</Text>
    </View>
  );
}