import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import colours from "../../../theme/colours";

const EventScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>EventScreen</Text>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGrey,
    flex:1,

  },
  text: {
    color: "white",
  },
});
