import React from "react";
import { View, Text,Button} from "react-native";
import {useNavigation} from "@react-navigation/native";


const ProfilePage = () => {
  const route = useNavigation();
  function navigateToLoginPage(){
    route.navigate("Login");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Page!</Text>
      <Button title="Login" style={{marginTop:10}} onPress={navigateToLoginPage} ></Button>
    </View>
  );
};

export default ProfilePage;
