import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 430,
    margin: 20,
    flexDirection: "column",
    borderRadius: 10,
  },

  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  subText: {
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  containerText: {
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  textHeader: {
    marginTop: 15,
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },

  containeButton: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
  },
  textButton: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
});
