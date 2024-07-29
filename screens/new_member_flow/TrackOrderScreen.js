import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function TrackOrderScreen({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.orderTrackingContainer}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              marginBottom: 12,
              textAlign: "left",
            }}>
            Tracking Order
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 12,
              }}>
              <Image
                style={{ height: 18, width: 18 }}
                source={require("../../assets/tracking-pins/dot.png")}
              />
              <Image
                style={{ height: 40, width: 2 }}
                source={require("../../assets/tracking-pins/line.png")}
              />
              <Image
                style={{ height: 18, width: 18 }}
                source={require("../../assets/tracking-pins/dot.png")}
              />
              <Image
                style={{ height: 40, width: 2 }}
                source={require("../../assets/tracking-pins/line.png")}
              />
              <Image
                style={{ height: 33, width: 33 }}
                source={require("../../assets/tracking-pins/tick.png")}
              />
            </View>

            <View style={{ justifyContent: "space-between" }}>
              <Text style={{ fontFamily: "Poppins_400Regular" }}>
                Order has been received
              </Text>
              <Text style={{ fontFamily: "Poppins_400Regular" }}>
                Preparing your order
              </Text>
              <Text style={{ fontFamily: "Poppins_400Regular" }}>
                Your order is complete! Meet us at the pickup area.
              </Text>
            </View>

          </View>
        </View>

        <TouchableOpacity
          style={[styles.orderPickupButton, { backgroundColor: "#4E8D7C" }]}>
          <Text style={styles.pickupButtonText}>Pickup Order</Text>
        </TouchableOpacity>

        <View style={styles.reviewReceiptContainer}>
          <View style={styles.receiptContent}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.headingText}>Transaction ID</Text>
              <Text style={styles.headingText}>{route.params.transactionId}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.headingText}>Date</Text>
              <Text style={styles.headingText}>{route.params.date}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.headingText}>Time</Text>
              <Text style={styles.headingText}>{route.params.time}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReceiptScreen",{...route.params})}
              style={[styles.orderPickupButton, { width: 160 }]}>
              <Text style={styles.pickupButtonText}>Review Receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth:0.1,
    marginHorizontal: 50,
    marginVertical: 80,
  },
  orderTrackingContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems:'center',
    padding: 50,
    borderRadius: 22,
    marginBottom: 25,
  },
  orderPickupButton: {
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
    height: 60,
    elevation: 4,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  reviewReceiptContainer: {
    padding: 10,
  },
  pickupButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  receiptContent: {
    borderBottomWidth: 1,
    marginBottom: 25,
    borderStyle: "dashed",
    borderBottomColor: "#8F8E8E",
  },
  headingText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});
