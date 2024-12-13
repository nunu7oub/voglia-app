import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const KeyTrends = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Key Fashion Trends of 2024</Text>
      <Text style={styles.paragraph}>
        Fashion in 2024 is about sustainability, bold colors, and versatile styles. 
        Here are some key trends you can expect to see throughout the year:
      </Text>
      <Text style={styles.subTitle}>1. Sustainable Fashion</Text>
      <Text style={styles.paragraph}>
        Eco-friendly materials, ethical production, and circular fashion are taking the lead.
        Big brands and emerging designers are focused on creating clothing with a smaller carbon footprint.
      </Text>
      <Text style={styles.subTitle}>2. Bold Colors</Text>
      <Text style={styles.paragraph}>
        Bright hues, from neon greens to electric pinks, are making a big statement this year.
        Pairing bold colors with neutrals will be a huge trend in both street style and runway shows.
      </Text>
      <Text style={styles.subTitle}>3. Vintage Revival</Text>
      <Text style={styles.paragraph}>
        Vintage and retro styles, including '90s and early 2000s pieces, are making a major comeback.
        Think oversized blazers, low-rise jeans, and slip dresses.
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

export default KeyTrends;