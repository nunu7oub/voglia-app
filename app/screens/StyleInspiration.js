import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const StyleInspiration = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Style Inspiration</Text>
      <Text style={styles.paragraph}>
        Whether you're looking for casual, business, or party outfits, we've got you covered. Here are some fresh styling ideas for every occasion.
      </Text>
      <Text style={styles.subTitle}>Casual Looks</Text>
      <Text style={styles.paragraph}>
        Combine your favorite jeans with a simple graphic tee or oversized sweater. Add sneakers for comfort or boots for an elevated look.
      </Text>
      <Text style={styles.subTitle}>Business Casual</Text>
      <Text style={styles.paragraph}>
        Opt for tailored trousers or a pencil skirt paired with a blouse or smart top. Finish the look with flats or low heels.
      </Text>
      <Text style={styles.subTitle}>Night Out</Text>
      <Text style={styles.paragraph}>
        Try a sleek dress or statement pants with a cropped jacket. Add bold jewelry to bring a touch of glam to your night.
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

export default StyleInspiration;