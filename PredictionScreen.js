import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PredictionScreen() {
  const [prediction, setPrediction] = useState(null);

  const generatePrediction = () => {
    const hk = ["1287", "4569", "3901", "7210"];
    const sgp = ["8827", "4707", "3158", "9250"];
    const macau = ["7932", "0504", "4360", "0517"];
    setPrediction({ hk, sgp, macau });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔮 Prediksi Angka</Text>
      <Button title="Hitung Prediksi" onPress={generatePrediction} />
      {prediction && (
        <View style={styles.resultBox}>
          <Text>HK Lotto: {prediction.hk.join(", ")}</Text>
          <Text>SGP Pools: {prediction.sgp.join(", ")}</Text>
          <Text>Toto Macau: {prediction.macau.join(", ")}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  resultBox: { marginTop: 20, padding: 10, backgroundColor: "#eee" }
});
