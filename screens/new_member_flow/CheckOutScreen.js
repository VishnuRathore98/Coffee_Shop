import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

export default function CheckOutScreen() {
  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <ScrollView>
        <View style={styles.orderSummary}>
          <View style={styles.orderDescription}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Order Title
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Order Description 1
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Order Description 2
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Order Description 3
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Order Description 4
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Order Description 5
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  $179.87
                </Text>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                Special Instructions
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}>
                Instruction description
              </Text>
            </View>
          </View>

        {/* Order Count */}
          <View style={styles.orderCount}>
            <View style={{justifyContent:'center', alignItems:'center', height:40, width:140, borderRadius:8, flexDirection:'row', backgroundColor:'white', elevation:2 }}>
              <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}><Icon name="remove-outline" size={18} color='#9C4400'/></TouchableOpacity>
              <View style={{borderRadius:4,height:24, width:36, borderWidth:0.1, justifyContent:'center', alignItems:'center', fontSize:16}}><Text>0</Text></View>
              <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}><Icon name="add-outline" size={18} color='#9C4400'/></TouchableOpacity>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold", padding: 10 }}>
                $179.87
              </Text>
            </View>
          </View>

        </View>

        <View style={styles.orderActions}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                As soon as possible
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}>
                Now - 10 Minutes
              </Text>
            </View>
            <RadioButton value="first" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                Later
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}>
                Schedule Pick Up
              </Text>
            </View>
            <RadioButton value="first" />
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View style={{}}>
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Payment Method
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: "Poppins_400Regular" }}
                >
                  Apple Pay
                </Text>
              </View>
              <Icon
                name="wallet-outline"
                size={24}
                style={{ marginRight: 6 }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
                // justifyContent: "center",
                // alignItems: "center",
              padding: 10,
            //   height:100 
             marginVertical:24, marginHorizontal:10
            }}
          >
              <TouchableOpacity style={{ flex: 1, backgroundColor: "white", height:60, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Icon name="cube-outline" size={30} />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{fontSize:16,  fontFamily: "Poppins_500Medium"}}>Delivery</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 1, backgroundColor: "green", height:60, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Icon name="location" size={30} color="white" />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ color: "white", fontSize:16, fontFamily: "Poppins_500Medium" }}>Pick Up</Text>
                </View>
              </TouchableOpacity>


          </View>
        </View>
        <TouchableOpacity style={{backgroundColor: GlobalStyles.colors.signUp.fillColor1, marginVertical:24, marginHorizontal:10, height:60, borderWidth:1, borderRadius:22, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white',fontSize:14 , fontFamily: "Poppins_500Medium" }}>Checkout <Text>$6.99</Text></Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems:'center'
  },
  orderSummary: {},
  orderDescription: {},
  orderCount: {padding:12, marginVertical:12, flexDirection: "row", justifyContent: "space-between" },
  orderActions: {marginVertical:12},
});
