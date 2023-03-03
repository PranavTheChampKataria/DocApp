import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate("Home"), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../images/logoDoc.png")} style={styles.logo} />
      <Text style={styles.title}>DocAtDoor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D70040",
  },
  logo: {
    height: 150,
    width: 150,
    tintColor: "white",
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
    color: "white",
  },
});
