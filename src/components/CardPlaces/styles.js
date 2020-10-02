import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    margin:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 15,

    elevation: 4,
    borderWidth:0.7,
    borderColor:'#dddddd',
    width:380,
  },
  text: {
    marginTop:3,
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 15,
    marginLeft:5
  },
  containeImage: {
    flex: 2,
    justifyContent: "space-around",
    flexDirection: "column",
    
    alignSelf: "stretch",
  },
  textHeader: {
    fontSize: 23,
    lineHeight: 30,
    fontWeight: "bold",
    marginLeft:5,
  },
  containerText: {
    flex: 1,
    marginTop:10,
    marginLeft:4,
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  image: {
    flex: 1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width:null,
  },
});
