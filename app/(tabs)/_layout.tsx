import { Text, View } from "@/components/Themed";
import { Slot } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <ImageBackground
      source={require("../../assets/images/fundo_de_tela.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <Slot />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 }
});
