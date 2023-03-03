import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ title, icon, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn}>
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 5,
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  back: {
    width: 30,
    height: 30,
  },
  backBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
