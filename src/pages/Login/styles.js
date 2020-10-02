import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 25,
    marginTop: 30,
  },
  form: {
    marginTop: 20,
  },
  formInput: {
    height: 70,
    borderBottomWidth: 1,
    margin: 10,
    fontSize: 20,
  },
  containerButton: {
    margin: 3,
    height: 40,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  containerForgot: {
    marginTop: 20,
    marginLeft: 3,
  },

  textBtn: {
    color: "white",
    fontSize: 18,
  },
  textForgot: {
    fontWeight: "400",
    fontSize: 17,
    textDecorationLine: "underline",
  },
});
