import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { RadioButton, List, PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToReceipt, emptyCart } from "../../store/redux/store";

export default function CheckOutScreen({ navigation }) {

  const cartItems = useSelector((state) => state.cartItems.items);
  // console.log("CartItems ==> ",cartItems);
  
  const dispatch = useDispatch();

  // const cartItems = route.params.cartItems;
  const [itemCount, setItemCount] = useState(0);
  const [isPickup, setIsPickup] = useState(true);
  const [pickupType, setPickupType] = useState("Now");
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  // useEffect(()=>{console.log(pickupType);},[pickupType]);

  function proceedToPayHandler(){
    // console.log("... proceedToPayHandler called ...");
    // console.log("Cart Items: ",cartItems);
    const receipt = {
      cartItems,
      orderStatus: 0,
      transactionId: "V"+Math.floor(Math.random()*100000),
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    }
    console.log("Receipt in checkout screen: ",receipt);

    dispatch(addToReceipt({item:receipt}));
    
    dispatch(emptyCart());

    navigation.navigate("TrackOrderScreen");
  }

  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });
  if (!fontsLoaded) {
    <View style={styles.loaderContainer}>
      <ActivityIndicator size='large' color='brown' />
    </View>;
  } else {
    return (
      <View style={styles.rootContainer}>
        {/* Showing added cart items ready to buy */}
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={[styles.orderSummary]}>
              <View style={[styles.orderDescription]}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_600SemiBold",
                      }}>
                      {item.name}
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        {item.cupSize.item}:
                      </Text>
                      <Text style={{ fontSize: 12, marginLeft: 10 }}>
                        {item.cupSize.description}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        {item.addIn.item}:
                      </Text>
                      <Text style={{ fontSize: 12, marginLeft: 10 }}>
                        {item.addIn.description}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        {item.creamer.item}:
                      </Text>
                      <Text style={{ fontSize: 12, marginLeft: 10 }}>
                        {item.creamer.description}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        {item.flavor.item}:
                      </Text>
                      <Text style={{ fontSize: 12, marginLeft: 10 }}>
                        {item.flavor.description}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        {item.sweetner.item}:
                      </Text>
                      <Text style={{ fontSize: 12, marginLeft: 10 }}>
                        {item.sweetner.description}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      style={{ width: 110, height: 120 }}
                      source={{ uri: item.img }}
                    />
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
                    onPress={() =>
                      itemCount < 1
                        ? setItemCount(0)
                        : setItemCount(itemCount - 1)
                    }
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
                    onPress={() => setItemCount(itemCount + 1)}
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
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <>
              <View style={styles.orderActions}>
                <View
                  style={{
                    padding: 10,
                    marginBottom: 10,
                    backgroundColor: "#dbb4b2",
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
                    Special Instructions:
                  </Text>
                  <TextInput
                    multiline
                    placeholder='Enter Instructions...'
                    style={{
                      textAlign: "left",
                      textAlignVertical: "top",
                      borderRadius: 8,
                      height: 100,
                      padding: 6,
                      backgroundColor: "#ffffff",
                    }}
                  />
                </View>

                <View
                  style={{
                    padding: 10,
                    marginBottom: 10,
                    backgroundColor: "#dbb4b2",
                    borderRadius: 12,
                  }}>
                  <Text
                    style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
                    Bill Details:
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins_400Regular",
                      }}>
                      Item Total:
                    </Text>
                    <Text style={{ fontSize: 14, marginLeft: 10 }}>
                      $899.99
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins_400Regular",
                      }}>
                      Delivery Fee:
                    </Text>
                    <Text style={{ fontSize: 14, marginLeft: 10 }}>$29.99</Text>
                  </View>
                  
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Poppins_400Regular",
                      }}>
                      Tax Charges:
                    </Text>
                    <Text style={{ fontSize: 14, marginLeft: 10 }}>$9.99</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text
                      style={{ fontSize: 18, fontFamily: "Poppins_500Medium" }}>
                      Total Pay:
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}>
                      $999.99
                    </Text>
                  </View>
                </View>

                <View style={{ backgroundColor: "#dbb4b2", borderRadius: 12 }}>
                  {/* Set pickup type radio group */}
                  {isPickup?
                  <View style={{ padding: 6 }}>
                    <RadioButton.Group
                      onValueChange={(newValue) => setPickupType(newValue)}
                      value={pickupType}>
                      {/* As soon as possible radio button */}

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: 10,
                        }}>
                        <View style={{}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "Poppins_500Medium",
                            }}>
                            As soon as possible
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontFamily: "Poppins_400Regular",
                            }}>
                            Now - 10 Minutes
                          </Text>
                        </View>
                        <RadioButton value='Now' />
                      </View>

                      {/* Later -> Schedule pickup radio button */}

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: 10,
                        }}>
                        <View style={{}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "Poppins_500Medium",
                            }}>
                            Later
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontFamily: "Poppins_400Regular",
                            }}>
                            Schedule Pick Up
                          </Text>
                        </View>
                        <RadioButton value='Later' />
                      </View>
                    </RadioButton.Group>
                  </View>:null
                  }
                  <List.Section>
                    <List.Accordion
                      title='Payment Method'
                      style={{ backgroundColor: "#dbb4b2" }}
                      titleStyle={{
                        fontFamily: "Poppins_500Medium",
                        color: "black",
                      }}>
                      <View style={{ marginHorizontal: 14 }}>
                        <RadioButton.Group
                          onValueChange={(newValue) =>
                            setPaymentMethod(newValue)
                          }
                          value={paymentMethod}>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: 10,
                            }}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name='wallet-outline'
                                size={24}
                                style={{ marginRight: 10 }}
                              />
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontFamily: "Poppins_400Regular",
                                }}>
                                UPI
                              </Text>
                            </View>
                            <RadioButton value='UPI' />
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: 10,
                            }}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name='cash-outline'
                                size={24}
                                style={{ marginRight: 10 }}
                              />
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontFamily: "Poppins_400Regular",
                                }}>
                                Cash
                              </Text>
                            </View>
                            <RadioButton value='CASH' />
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: 10,
                            }}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name='card-outline'
                                size={24}
                                style={{ marginRight: 10 }}
                              />
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontFamily: "Poppins_400Regular",
                                }}>
                                Credit/Debit Card
                              </Text>
                            </View>
                            <RadioButton value='CARD' />
                          </View>
                        </RadioButton.Group>
                      </View>
                    </List.Accordion>
                  </List.Section>

                  <View
                    style={{
                      flexDirection: "row",
                      padding: 10,
                      marginVertical: 24,
                      marginHorizontal: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => setIsPickup(false)}
                      style={{
                        flex: 1,
                        backgroundColor: isPickup ? "white" : "green",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      }}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon
                          name={isPickup ? "cube-outline" : "cube"}
                          size={30}
                          color={isPickup ? "black" : "white"}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: "Poppins_500Medium",
                            color: isPickup ? "black" : "white",
                          }}>
                          Delivery
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setIsPickup(true)}
                      style={{
                        flex: 1,
                        backgroundColor: isPickup ? "green" : "white",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      }}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon
                          name={isPickup ? "location" : "location-outline"}
                          size={30}
                          color={isPickup ? "white" : "black"}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Text
                          style={{
                            color: isPickup ? "white" : "black",
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
                onPress={proceedToPayHandler}
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
                  }}>{paymentMethod==='CASH'?'Place your Order':'Proceed To Pay'}
                </Text>
              </TouchableOpacity>
            </>
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 12,
    backgroundColor: "#fff",
    // alignItems:'center'
  },
  orderSummary: {
    borderRadius: 12,
    backgroundColor: "#dbb4b2",
    marginBottom: 10,
  },
  orderDescription: {},
  orderCount: {
    padding: 12,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderActions: {
    marginVertical: 12,
    // backgroundColor:'#dbb4b2',
  },
});
