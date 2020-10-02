import React from "react";
import { View, SafeAreaView, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import Covid from "../../components/Covid";
import InputSearch from "../../components/InputSearch";
import CardExplore from "../../components/CardExplore";
import CardPlaces from "../../components/CardPlaces";
const HomePage = () => {

  //FAKE DATA 
  const places = [
    {
      id: 1,
      image: require("../../assets/images/card1.jpeg"),
      header: "Unique stays",
      text: "Spaces that are more than just a place to sleep.",
    },
    {
      id: 2,
      image: require("../../assets/images/card2.jpeg"),
      header: "Online Experiences",
      text: "Unique activies we can do together led by a world of hosts.",
    },
    {
      id: 3,
      image: require("../../assets/images/card3.jpeg"),
      header: "Entire homes",
      text: "Comfortable private places, with room for friends or family.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
     
      <Covid />
    
      <InputSearch />
      <ScrollView>
        <CardExplore />

        <FlatList
          data={places}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => <CardPlaces key={item.id} data={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
