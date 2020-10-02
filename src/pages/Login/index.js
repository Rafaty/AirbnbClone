import React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Feather name="arrow-left" size={30} color="black"></Feather>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Log in to Airbnb!</Text>
      <View style={styles.form}>
        <TextInput clearButtonMode='always'  style={styles.formInput} placeholder="Email"></TextInput>
        <TextInput clearButtonMode='always' secureTextEntry={true}  style={styles.formInput} placeholder="Senha"></TextInput>
      </View>
      <TouchableOpacity style={styles.containerButton} onPress={() => {}}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerForgot} onPress={() => {}}>
        <Text style={styles.textForgot}>Forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
