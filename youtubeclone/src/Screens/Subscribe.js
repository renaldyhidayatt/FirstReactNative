import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "../Components/Headers.components";

function Subscribe() {
  const { colors } = useTheme();
  const myColor = colors.iconColor;
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ color: myColor }}>Sub videos</Text>
    </View>
  );
}

export default Subscribe;
