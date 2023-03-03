import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Success from "./Success";

let DaysList = [];
const BookAppointment = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectGen, setSelectGen] = useState(-1);
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(-1);
  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);

  const getDays = (month) => {
    let days = 0;
    if (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
      days = 31;
    } else if (month == 4 || 6 || 9 || 11) {
      days = 30;
    } else if (month == 2) {
      days = 28;
      if (new Date().getFullYear % 4 == 0) {
        days = 29;
      } else {
        days = 28;
      }
    }
    return days;
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header
          icon={require("../images/back.png")}
          title={"Book Appointment"}
          style={styles.container}
        />
        <Image source={require("../images/doctor.png")} style={styles.docImg} />
        <Text style={styles.docName}>Doctor Phoenix</Text>
        <Text style={styles.docSlp}> Cardiologist </Text>
        <Text style={styles.heading}>Select Date</Text>
        <View>
          <FlatList
            horizontal
            data={days}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ index, item }) => index}
            renderItem={({ index, item }) => (
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  width: 55,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: selectedDay == index ? "#0096FF" : "white",
                  marginLeft: 10,
                  marginTop: 10,
                }}
                onPress={() => {
                  if (item.day < new Date().getDate()) {
                  } else {
                    setSelectedDay(index);
                  }
                }}
              >
                <Text
                  style={{ color: selectedDay == index ? "white" : "#0096FF" }}
                >
                  {item.day}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={[
              "8:00-10:00AM",
              "10:00-12:00PM",
              "12:00-2:00PM",
              "3:00-5:00PM",
              "5:00-7:00PM",
              "7:00-9:00PM",
            ]}
            keyExtractor={({ index, item }) => index}
            renderItem={({ index, item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedSlot(index);
                  }}
                  style={[
                    styles.timeSlot,
                    {
                      borderColor: selectedSlot == index ? "#0096FF" : "black",
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: selectedSlot == index ? "#0096FF" : "black",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput placeholder=" Enter Name" style={styles.pName} />
        <Text style={styles.heading}>Select Gender</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              styles.gender,
              { borderColor: selectGen == 0 ? "#0096FF" : "black" },
            ]}
            onPress={() => setSelectGen(0)}
          >
            <Image
              source={require("../images/male.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              { borderColor: selectGen == 1 ? "#0096FF" : "black" },
            ]}
            onPress={() => setSelectGen(1)}
          >
            <Image
              source={require("../images/female.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            navigation.navigate("Success");
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>{"Book"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docImg: {
    width: 125,
    height: 125,
    marginTop: 40,
    alignSelf: "center",
  },
  docName: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "700",
    marginTop: 10,
  },
  docSlp: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "600",
    marginTop: 10,
    color: "#088F8F",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
    color: "#000",
  },
  timeSlot: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 8,
  },
  pName: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 0.5,
    width: "90%",
    marginLeft: 15,
    marginTop: 5,
    padding: 5,
  },
  gender: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    alignSelf: "center",
    marginBottom: 15,
    borderRadius: 10,
    height: 50,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#FF6347",
  },
});
