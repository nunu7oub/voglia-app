import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FashionTrends = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fashion Trends 2024</Text>
      <Text style={styles.paragraph}>
        Welcome to the ultimate fashion guide for 2024! This year is all about self-expression, sustainability, and versatility. From bold statement pieces to minimalistic everyday essentials, 2024 has something for everyone.
      </Text>

      <Text style={styles.heading}>Key Trends:</Text>
      <Text style={styles.listItem}>- *Sustainable Fashion*: The rise of eco-conscious brands is huge this year. Celebrities like Emma Watson and Zendaya are leading the charge by choosing eco-friendly materials, rewearing iconic outfits, and supporting sustainable labels.</Text>
      <Text style={styles.listItem}>- *Pastel Colors*: Soft shades of lavender, mint green, and baby blue dominate the fashion world. These tones add a fresh, elegant touch to any outfit and are a favorite of stars like Taylor Swift and Hailey Bieber.</Text>
      <Text style={styles.listItem}>- *Oversized Blazers*: A must-have in every wardrobe, oversized blazers can be styled casually with jeans or dressed up with tailored trousers. Timothée Chalamet and Rihanna are often seen rocking this trend effortlessly.</Text>
      <Text style={styles.listItem}>- *Sheer Fabrics*: Light, transparent fabrics bring a blend of boldness and sophistication. Dua Lipa and Bella Hadid have been spotted wearing sheer dresses with layered accessories to make a statement.</Text>
      <Text style={styles.listItem}>- *Chunky Footwear*: Boots and sneakers with exaggerated soles are taking over. Gigi Hadid and Billie Eilish pair them with everything from streetwear to chic evening outfits.</Text>

      <Text style={styles.heading}>Celebrity Inspiration:</Text>
      <Text style={styles.paragraph}>
        Looking for style icons? Bella Hadid masters the edgy, street-style look with leather jackets, cargo pants, and sporty sunglasses. Zendaya redefines elegance with daring red carpet gowns, often blending vintage and contemporary vibes. Meanwhile, Harry Styles continues to push boundaries with gender-fluid fashion, incorporating bright colors, flared trousers, and bold patterns into his wardrobe.
      </Text>
      <Text style={styles.paragraph}>
        Want a minimalist take? Hailey Bieber's off-duty style is all about neutral tones, crop tops, and oversized jackets. On the other hand, Rihanna showcases fearless maternity wear, proving that pregnancy and high fashion go hand in hand.
      </Text>

      <Text style={styles.heading}>How to Style:</Text>
      <Text style={styles.paragraph}>
        - *Layering Accessories*: Experiment with chunky necklaces, rings, and bold earrings to elevate simple outfits. Pair them with pastel or monochromatic clothing for a balanced look.
        - *Mixing Textures*: Combine silk, leather, and denim for a multidimensional aesthetic.
        - *Tailored Streetwear*: Oversized blazers with biker shorts or baggy pants create a perfect blend of comfort and style.
      </Text>

      <Text style={styles.paragraph}>
        With these trends and inspirations, you’re ready to conquer 2024 in style. Stay tuned to Voglia for more fashion tips, designer highlights, and exclusive trends.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});

export default FashionTrends;