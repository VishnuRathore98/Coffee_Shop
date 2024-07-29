import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { GlobalStyles } from "../../constants/styles";

export default function ScreenOne({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.skipButton}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={{ height: 240, width: 304 }}
            source={require("./screenone.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              color: GlobalStyles.colors.signUp.fillColor1,
              marginBottom: 10,
            }}>
            Choose and customize your drinks with simplicity
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
              color: GlobalStyles.colors.signUp.fillColor1,
            }}>
            You want your drink and you want it your way so be bold and
            customize the way that makes you the happiest!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}>
          <Image
            source={require("./beans1.png")}
            style={{ height: 40, width: 104 }}
          />
          <Pressable
            onPress={() => navigation.navigate("ScreenTwo")}
            android_ripple={{ color: "#F6F2ED" }}
            style={styles.button}>
            <Text
              style={{
                color: "#F6F2ED",
                fontSize: 14,
                fontFamily: "Poppins_400Regular",
              }}>
              NEXT
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    // alignItems:'center',
  },
  imageContainer: {
    // marginTop: 10,
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  skipButton: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,
    // marginTop: 20,
  },
  button: {
    width: 156,
    height: 60,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
  },
});
