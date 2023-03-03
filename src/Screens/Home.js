import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import CommonBtn from "../components/CommonBtn";
import BookAppointment from "./BookAppointment";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header title={"Doc"} icon={require("../images/logoDoc.png")} />
          <Image
            source={require("../images/bannerDoc.png")}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Category</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 1, 1, 1, 1]}
              renderItem={({ index, item }) => {
                return (
                  <TouchableOpacity style={styles.linearGradient}>
                    <Text style={styles.catText}>Category</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={styles.docList}>
            <FlatList
              data={[1, 1, 1, 1]}
              numColumns={2}
              renderItem={({ index, item }) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require("../images/doctor.png")}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docSpl}>Cardiologist</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index / 2 == 0 ? "#088F8F" : "red",
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ]}
                    >
                      {index / 2 == 0 ? "Available" : "Busy"}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.btn,
                        {
                          backgroundColor: index / 2 == 0 ? "#FF6347" : "grey",
                        },
                      ]}
                      onPress={() => {
                        index / 2 == 0
                          ? navigation.navigate(BookAppointment)
                          : "";
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        {" "}
                        Book Appointment{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.navigate("Pending")}>
          <Image
            source={require("../images/pending.png")}
            style={styles.btmImg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Completed")}>
          <Image source={require("../images/done.png")} style={styles.btmImg} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CallAmb")}>
          <Image
            source={require("../images/ambulance.png")}
            style={styles.btmImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "90%",
    height: 200,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
    color: "#000",
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6347",
    marginTop: 10,
  },
  catText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  docItem: {
    width: "45%",
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 5,
  },
  docList: {
    alignItems: "center",
    marginLeft: 10,
  },
  docImg: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 20,
  },
  docName: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  docSpl: {
    padding: 5,
    backgroundColor: "#f2f2f2",
    color: "#088F8F",
    marginTop: 5,
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "600",
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    alignSelf: "center",
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
  },
  bottomView: {
    width: "95%",
    height: 60,
    borderRadius: 10,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
    elevation: 5,
    bottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  btmImg: {
    height: 45,
    width: 45,
  },
});

export default Home;
