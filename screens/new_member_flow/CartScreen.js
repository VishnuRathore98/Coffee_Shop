import { Image, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function CartScreen() {
  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.cartContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/shoppingbag.png")}
          />
          <Text style={styles.textStyle}>No item in your cart</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 12,
    height: 160,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#4A4747",
  },
  imageStyle: {
    height: 48,
    width: 48,
    marginBottom: 12,
  },
});
