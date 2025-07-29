import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Hasil Terbaru</Text>
      <Text style={styles.text}>HK Lotto: 2883</Text>
      <Text style={styles.text}>SGP Pools: 7750</Text>
      <Text style={styles.text}>Toto Macau: 3274</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 5 }
});
