import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CommonBtn = (w, h, txt, onClick) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
    >
      <LinearGradient
        colors={["red", "orange"]}
        style={{
          height: h,
          width: w,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{txt}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CommonBtn;
