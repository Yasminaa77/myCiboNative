// src/screens/ProcessingScreen.js
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const ProcessingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Processing receipt...</Text>
    </View>
  );
};

export default ProcessingScreen;
