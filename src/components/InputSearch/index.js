import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles.js";

const InputSearch = () => {
  return (
    <>
      <View style={styles.sectionStyle}>
        <Ionicons
          color={"tomato"}
          size={20}
          name="ios-search"
          style={styles.imageStyle}
        ></Ionicons>
        <Text>Where are you going?</Text>
      </View>
    </>
  );
};

export default InputSearch;
