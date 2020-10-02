import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.js";

const CardPlaces = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containeImage}>
        <Image
          source={data.image}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        ></Image>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textHeader}>{data.header}</Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  );
};

export default CardPlaces;
