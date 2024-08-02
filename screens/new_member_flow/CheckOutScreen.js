import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,Poppins_600SemiBold
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";
import { useSelector } from "react-redux";
import { useState } from "react";



export default function CheckOutScreen({ navigation,route }) {

  // console.log(route.params.cartItems);
  const cartItems = route.params.cartItems;
  const [itemCount, setItemCount] = useState(0);
  const [isPickup, setIsPickup] = useState(true);
  // let selectedButtonColor="white";


  // pickupHandler = ()=>setIsPickup(!isPickup);

  console.log("CheckOutScreen ==>  ",cartItems);

  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <ScrollView>


{/* Showing added cart items ready to buy */}
            <FlatList
              data={cartItems}
              renderItem={({item})=>(
                <View style={[styles.orderSummary,]}>
                <View style={[styles.orderDescription,]}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                    }}>
                    <View>
                      <Text
                        style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
                        {item.name}
                      </Text>
          
                        <View style={{flexDirection:'row', }}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins_500Medium"}}>
                        {item.cupSize.item}: 
                        </Text>
                        <Text style={{ fontSize: 12, marginLeft:10}}>
                        {item.cupSize.description}
                        </Text>   
                      </View>
          
                        <View style={{flexDirection:'row', }}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins_500Medium"}}>
                        {item.addIn.item}: 
                        </Text>
                        <Text style={{ fontSize: 12, marginLeft:10}}>
                        {item.addIn.description}
                        </Text>   
                      </View>
          
                      <View style={{flexDirection:'row', }}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins_500Medium"}}>
                        {item.creamer.item}: 
                        </Text>
                        <Text style={{ fontSize: 12, marginLeft:10}}>
                        {item.creamer.description}
                        </Text>   
                      </View>
          
                      <View style={{flexDirection:'row', }}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins_500Medium"}}>
                        {item.flavor.item}: 
                        </Text>
                        <Text style={{ fontSize: 12, marginLeft:10}}>
                        {item.flavor.description}
                        </Text>   
                      </View>
          
                      <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins_500Medium"}}>
                        {item.sweetner.item}: 
                        </Text>
                        <Text style={{ fontSize: 12, marginLeft:10}}>
                        {item.sweetner.description}
                        </Text>   
                      </View>
          
                    </View>
                    <View>
                    <Image style={{ width: 110, height: 120, }} source={{uri:item.img}} />
                    </View>
                  </View>
                  
                </View>
          
                {/* Order Count */}
                <View style={styles.orderCount}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 140,
                      borderRadius: 8,
                      flexDirection: "row",
                      backgroundColor: "white",
                      elevation: 2,
                    }}>
                    <TouchableOpacity
                      onPress={()=>itemCount<1?setItemCount(0):setItemCount(itemCount-1)}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Icon name='remove-outline' size={18} color='#9C4400' />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderRadius: 4,
                        height: 24,
                        width: 36,
                        borderWidth: 0.1,
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 16,
                      }}>
                      <Text>{itemCount}</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>setItemCount(itemCount+1)}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Icon name='add-outline' size={18} color='#9C4400' />
                    </TouchableOpacity>
                  </View>
                  <View>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        $179.87
                      </Text>
                    </View>
                </View>
              </View>
              )}
              keyExtractor={item=>item.id}

            />


          <View style={styles.orderActions}>
                  <View style={{ padding: 10, marginBottom:10, backgroundColor:'#dbb4b2', borderRadius:12 }}>
                    <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
                      Special Instructions:
                    </Text>
                    <TextInput
                      multiline
                      placeholder="Enter Instructions..."
                      style={{ textAlign:'left',textAlignVertical:'top', borderRadius:8, height:100, padding:6, backgroundColor:'#ffffff' }}
                      / >
                  </View>

                  <View style={{ padding: 10, marginBottom:10, backgroundColor:'#dbb4b2', borderRadius:12 }}>
                    <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
                      Bill Details:
                    </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular"}}>
                        Item Total: 
                        </Text>
                        <Text style={{ fontSize: 14, marginLeft:10}}>
                        $899.99
                        </Text>   
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular"}}>
                        Delivery Fee: 
                        </Text>
                        <Text style={{ fontSize: 14, marginLeft:10}}>
                        $29.99
                        </Text>   
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular"}}>
                        Delivery Tip: 
                        </Text>
                        <Text style={{ fontSize: 14, marginLeft:10}}>
                        $4.99
                        </Text>   
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular"}}>
                        Tax Charges: 
                        </Text>
                        <Text style={{ fontSize: 14, marginLeft:10}}>
                        $9.99
                        </Text>   
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 18, fontFamily: "Poppins_500Medium"}}>
                        Total Pay: 
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight:'bold', marginLeft:10}}>
                        $999.99
                        </Text>   
                      </View>
                  </View>

            <View style={{backgroundColor:'#dbb4b2', borderRadius:12}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <View style={{}}>
                <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
                  As soon as possible
                </Text>
                <Text
                  style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
                  Now - 10 Minutes
                </Text>
              </View>
              <RadioButton value='first' />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <View style={{}}>
                <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
                  Later
                </Text>
                <Text
                  style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
                  Schedule Pick Up
                </Text>
              </View>
              <RadioButton value='first' />
            </View>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}>
                <View style={{}}>
                  <Text
                    style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
                    Payment Method
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
                    Apple Pay
                  </Text>
                </View>
                <Icon
                  name='wallet-outline'
                  size={24}
                  style={{ marginRight: 6 }}
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                padding: 10,
                marginVertical: 24,
                marginHorizontal: 10,
              }}>
              <TouchableOpacity
              onPress={()=>setIsPickup(false)}
                style={{
                  flex: 1,
                  backgroundColor: (isPickup?"white":"green"),
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center", }}>
                  <Icon name='cube-outline' size={30} color={isPickup?"black":"white"} />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 16, fontFamily: "Poppins_500Medium", color: isPickup?"black":"white", }}>
                    Delivery
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>setIsPickup(true)}
                style={{
                  flex: 1,
                  backgroundColor: (isPickup?"green":"white"),
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center"}}>
                  <Icon name='location' size={30} color={ isPickup?"white":"black"}  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text
                    style={{
                      color: isPickup?"white":"black",
                      fontSize: 16,
                      fontFamily: "Poppins_500Medium",
                    }}>
                    Pick Up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("TrackOrderScreen",{
              orderStatus: 0,
              transactionId: 'V2342343532',
              date: new Date().toDateString(),
              time: new Date().toLocaleTimeString(),
            })}
            style={{
              backgroundColor: GlobalStyles.colors.signUp.fillColor1,
              marginVertical: 24,
              marginHorizontal: 10,
              height: 60,
              borderWidth: 1,
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Poppins_500Medium",
              }}>
              Proceed To Pay
            </Text>
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
    padding: 12,
    backgroundColor:'#fff'
    // alignItems:'center'
  },
  orderSummary: {
    borderRadius:12,
    backgroundColor:'#dbb4b2',
    marginBottom:10,
  },
  orderDescription: {},
  orderCount: {
    padding: 12,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderActions: { marginVertical: 12,
    // backgroundColor:'#dbb4b2',
   },
});
