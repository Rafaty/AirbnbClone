import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import SavedPage from "../pages/Saved";
import InboxPage from "../pages/Inbox";
import TripsPage from "../pages/Trips";
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ isImage = false, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Explore":
                iconName = "ios-search";
                break;

              case "Saved":
                iconName = "ios-heart-empty";
                break;

              case "Trips":
                isImage = true;
                break;

              case "Saved":
                iconName = "ios-heart-empty";
                break;

              case "Inbox":
                iconName = "ios-chatboxes";
                break;

              case "Profile":
                iconName = "md-person";
                break;
            }
            return !isImage ? (
              <Ionicons name={iconName} size={size} color={color} />
            ) : (
              <Image
                source={require("../assets/images/airbnb.png")}
                style={{ height: 24, width: 24}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 13,
            margin: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen name="Explore" component={HomePage} />
        <Tab.Screen name="Saved" component={SavedPage} />
        <Tab.Screen name="Trips" component={TripsPage} />
        <Tab.Screen name="Inbox" component={InboxPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
 
  );
}
