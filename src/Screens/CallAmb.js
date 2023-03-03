import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const CallAmb = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header icon={require("../images/back.png")} title={"Call Ambulance"} />
      <TextInput placeholder="Address" style={styles.address} />
      <TouchableOpacity style={[styles.btn]} onPress={() => {}}>
        <Text style={{ color: "#fff", fontSize: 17 }}> Call Now </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CallAmb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
    marginTop: 50,
  },
  btn: {
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    width: 135,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#FF6347",
  },
});
