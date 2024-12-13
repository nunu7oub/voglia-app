mport React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const CelebrityStyle = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Celebrity Style Inspiration</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x300.png?text=Kendall+Jenner' }}
          style={styles.image}
        />
        <Text style={styles.name}>Kendall Jenner</Text>
        <Text style={styles.description}>
          Kendall Jenner is known for her minimalistic yet chic style. Her outfits often include tailored
          suits, oversized blazers, and classic neutral tones. She effortlessly combines high fashion with
          streetwear elements.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x300.png?text=Bella+Hadid' }}
          style={styles.image}
        />
        <Text style={styles.name}>Bella Hadid</Text>
        <Text style={styles.description}>
          Bella Hadid's fashion style is edgy and modern. She is often seen sporting oversized jackets, leather
          pants, and bold statement pieces. Her looks combine urban influences with high-end fashion.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x300.png?text=Rihanna' }}
          style={styles.image}
        />
        <Text style={styles.name}>Rihanna</Text>
        <Text style={styles.description}>
          Rihanna's style is a mix of bold, daring, and extravagant outfits. Known for her ability to take
          risks, she frequently blends streetwear with haute couture, creating a unique look that has influenced
          fashion worldwide.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x300.png?text=Hailey+Bieber' }}
          style={styles.image}
        />
        <Text style={styles.name}>Hailey Bieber</Text>
        <Text style={styles.description}>
          Hailey Bieber's style is fresh and contemporary, with an emphasis on athleisure, oversized jackets,
          and sleek accessories. She effortlessly balances casual comfort with high-fashion elements, making
          her a trendsetter for many.
        </Text>
      </View>

      <Text style={styles.footer}>
        Stay tuned for more celebrity fashion updates, and get inspired by the latest trends from your favorite stars!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default CelebrityStyle;