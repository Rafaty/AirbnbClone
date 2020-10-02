import * as React from "react";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

import TabNavigation from "./src/routes/tabNavigation";
import StackNavigation from "./src/routes/stackNavigation";

export default function App() {
  return (
    <>
      <StackNavigation />
    </>
  );
}
