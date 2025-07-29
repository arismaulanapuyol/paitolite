import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Selamat Datang di PAITO Lite</Text>
      <Text style={styles.text}>
        Pasaran aktif: HK Lotto, SGP Pools, Toto Macau
      </Text>
      <Text style={styles.text}>
        Prediksi sudah menggunakan rumus AI versi Full 🔮
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16 }
});
