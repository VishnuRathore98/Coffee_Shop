import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function AccountIdScreen() {
  return (
    <View style={styles.rootContainer}>
      <Icon name='qr-code-outline' size={200} />
      <Text style={{ fontSize: 20 }}>John Constantine</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#F6F2ED",
    justifyContent: "center",
    alignItems: "center",
  },
});
