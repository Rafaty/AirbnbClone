import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles.js";

const CardExplore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/explore.jpeg")}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Go near</Text>
          <View style={styles.subText}>
            <Text style={styles.text}>Settle in somewhere new.</Text>
            <Text style={styles.text}>Discover nearby stays to live,</Text>
            <Text style={styles.text}> work or just relax </Text>
          </View>
          <View style={styles.containeButton}>
              <Text style={styles.textButton}>Explore nearby</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardExplore;
