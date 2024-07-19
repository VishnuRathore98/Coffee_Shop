import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function TrackOrderScreen() {
  let [fontsLoaded] = useFonts({ Poppins_500Medium });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.orderTrackingContainer}>
          <Text>Tracking Order</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Order has been received</Text>
            <Text>Preparing your order</Text>
            <Text>Your order is complete! Meet us at the pickup area.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.orderPickupButton}>
          <Text style={styles.pickupButtonText}>Pickup Order</Text>
        </TouchableOpacity>

        <View style={styles.reviewReceiptContainer}>
          <View style={styles.receiptContent}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Transaction ID</Text>
              <Text style={styles.headingText}>V2342123332</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Date</Text>
              <Text style={styles.headingText}>Nov 21 2024</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Time</Text>
              <Text style={styles.headingText}>03:30 PM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.orderPickupButton}>
            <Text style={styles.pickupButtonText}>Review Receipt</Text>
          </TouchableOpacity>
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
    borderWidth:1,
    marginHorizontal:50,
    marginVertical:100,
    
  },
  orderTrackingContainer: {
    backgroundColor:'white',
    justifyContent: "center",
    alignItems: "center",
    padding:50
  },
  orderPickupButton: {
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
    height: 60,
    borderWidth: 1,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewReceiptContainer: {
    padding:10,
  },
  pickupButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  receiptContent: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderStyle: "dashed",
    borderBottomColor: "#8F8E8E",
  },
  headingText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});
