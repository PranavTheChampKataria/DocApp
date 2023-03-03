import { FlatList, StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const Completed = () => {
  return (
    <View style={styles.container}>
      <Header
        icon={require("../images/back.png")}
        title={"Completed Appointments"}
      />
      <FlatList
        data={[1, 1, 1, 1, 11]}
        renderItem={({ index, item }) => (
          <View style={styles.itemView}>
            <Image
              source={require("../images/doctor.png")}
              style={styles.docImg}
            />
            <View>
              <Text style={styles.docName}>Doctor Lee</Text>
              <Text style={styles.timings}>10:00-12:00 PM</Text>
            </View>
            <Text style={styles.status}>Completed</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: "95%",
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    borderWidth: 0.5,
    marginTop: 10,
    alignItems: "center",
  },
  docImg: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginLeft: 10,
  },
  docName: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
  },
  timings: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 3,
  },
  status: {
    color: "#088F8F",
    marginLeft: 30,
    fontSize: 20,
  },
});
