import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_800ExtraBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { GlobalStyles } from "../../constants/styles";
import { useSelector } from "react-redux";

export default function ReceiptScreen({ navigation,route }) {

  const cartItems = useSelector((state)=>state.cartItems.items);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_800ExtraBold,
    Poppins_400Regular,
  });

    return (
      <View style={styles.rootContainer}>
        <View style={styles.receiptContainer}>
          <Text style={styles.titleText}>Thank you!</Text>

          <View style={styles.receiptSummary}>
            <View style={styles.receiptHeader}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text style={styles.headingText}>Transaction ID</Text>
                <Text style={styles.headingText}>{route.params.transactionId}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text style={styles.headingText}>Date</Text>
                <Text style={styles.headingText}>{route.params.date}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text style={styles.headingText}>Time</Text>
                <Text style={styles.headingText}>{route.params.time}</Text>
              </View>
            </View>

            <View style={styles.receiptItems}>
              <Text style={styles.headingText}>Item</Text>
              <Text style={styles.headingText}>{cartItems[0].name}</Text>
              <Text style={styles.itemContentText}>
                {cartItems[0].cupSize.description}, {cartItems[0].sweetner.description} {cartItems[0].sweetner.item}, {cartItems[0].flavor.description} Pump (s) {cartItems[0].flavor.item}, 3 Shot (s)
                Espresso, Pumpkin Spice Toppings, {cartItems[0].creamer.description}, {cartItems[0].addIn.description}
              </Text>
            </View>

            <View style={styles.receiptPayment}>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.headingText}>Payment Summary</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Text style={styles.subText}>Price</Text>
                  <Text style={styles.subText}>$6.99</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Text style={styles.subText}>Rewards Points</Text>
                  <Text style={styles.subText}>+80</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Text style={styles.subText}>Total</Text>
                  <Text style={styles.subText}>$6.99</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text style={styles.headingText}>Payment Method</Text>
                <Text style={styles.subText}>Rewards</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Text style={styles.headingText}>Schedule Pick Up</Text>
                <Text style={styles.subText}>03:15 PM</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("TrackOrderScreen",{...route.params})}
            style={styles.trackButton}>
            <Text style={styles.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 80,
  },
  receiptContainer: {
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: "white",
    borderRadius: 14,
    padding: 18,
  },
  titleText: {
    textAlign: "center",
    color: "#4E8D7C",
    fontSize: 20,
    fontFamily: "Poppins_800ExtraBold",
  },
  receiptSummary: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    borderColor: "#8F8E8E",
  },
  receiptHeader: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderStyle: "dashed",
    borderBottomColor: "#8F8E8E",
  },
  receiptItems: {
    marginBottom: 10,
  },
  trackButton: {
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
    height: 60,
    borderWidth: 1,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  trackButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  headingText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  subText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  itemContentText: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
  },
});
