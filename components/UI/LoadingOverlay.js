import { Image, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function LoadingOverlay() {
  return (
    <View style={styles.rootContainer}>
      <Image
        style={{ height: 375, width: 238 }}
        source={require("./image.png")}
      />
      <Image
        style={{ height: 24, width: 180 }}
        source={require("./beans.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
