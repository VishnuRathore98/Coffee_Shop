import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import LoadingOverlay from "./components/UI/LoadingOverlay";
import ScreenOne from "./components/onboarding/ScreenOne";
import ScreenTwo from "./components/onboarding/ScreenTwo";
import ScreenThree from "./components/onboarding/ScreenThree";


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LoadingOverlay />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
