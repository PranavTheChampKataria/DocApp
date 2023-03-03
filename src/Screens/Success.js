import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Success = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../images/tick.png")} style={styles.success} />
      <Text style={styles.msg}>
        Your appointment has been successfully booked
      </Text>
      <TouchableOpacity
        style={styles.gotoHome}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ fontWeight: "600" }}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    width: 100,
    height: 100,
  },
  msg: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
    color: "#606060",
  },
  gotoHome: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 20,
  },
});
