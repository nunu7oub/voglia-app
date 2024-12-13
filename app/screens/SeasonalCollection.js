import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SeasonalCollection = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Seasonal Collection</Text>
      <Text style={styles.paragraph}>
        Our seasonal collections include trendy pieces to suit every season's vibe. Check out what's hot for each season below.
      </Text>
      <Text style={styles.subTitle}>Spring 2024</Text>
      <Text style={styles.paragraph}>
        Light fabrics, pastel shades, floral prints, and airy cuts are the go-to choices for the season. Add a touch of casual chic with denim jackets.
      </Text>
      <Text style={styles.subTitle}>Summer 2024</Text>
      <Text style={styles.paragraph}>
        Summer is all about breezy dresses, shorts, tank tops, and swimsuits. Bright colors and bold patterns make a statement under the sun.
      </Text>
      <Text style={styles.subTitle}>Fall 2024</Text>
      <Text style={styles.paragraph}>
        Layered outfits, plaid patterns, trench coats, and earthy tones like burgundy, mustard, and deep green dominate fall trends.
      </Text>
      <Text style={styles.subTitle}>Winter 2024</Text>
      <Text style={styles.paragraph}>
        Chunky knit sweaters, leather jackets, and fur-lined coats keep you cozy while looking chic. Pair with boots for a classic winter look.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default SeasonalCollection;