import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import * as Haptics from 'expo-haptics';

import { addToCart, removeFromCart } from '../../store/redux/store';

const cupSizeOptions = [
  { label: "Small", value: "1" },
  { label: "Medium", value: "2" },
  { label: "Large", value: "3" },
];

const addInOptions = [
  { label: "Normal Ice", value: "1" },
  { label: "", value: "" },
  { label: "", value: "" },
];

const creamerOptions = [
  { label: "Oatmilk", value: "1" },
  { label: "", value: "" },
  { label: "", value: "" },
];

export default function ProductDetailScreen({ navigation, route }) {
  
  const [cupSize, setCupSize] = useState("");
  const [addIn, setAddIn] = useState("");
  const [creamer, setCreamer] = useState("");
  const [sweetner, setSweetner] = useState(0);
  const [flavor, setFlavor] = useState(0);
  const [itemAdded, setItemAdded] = useState(false);
  // const cartItems = useSelector();
  const dispatch = useDispatch();

  // console.log("\nCupSize: " ,cupSize ,"\nAddIn: ",addIn ,"\nCreamer: " ,creamer ,"\nSweetner: " ,sweetner ,"\nflavor: " ,flavor);

  function addToCartHandler(){
    const cartItem = {
      name:route.params.name,
      id: Math.floor(Math.random()*10000),
      cupSize:
      {
        item:'Cup Size',
        description:cupSize
      },
      addIn:
      {
        item:'Add In',
        description:addIn
      },
      creamer:
      {
        item:'Creamer',
        description:creamer
      },
      sweetner:
      {
        item:'Splendia packet',
        description:sweetner
      },
      flavor:
      {
        item:'Pumpkin spice',
        description:flavor
      }};
    
    if (itemAdded) {
     navigation.navigate('Cart'); 
    }else{
      dispatch(addToCart({item:cartItem}));
      setItemAdded(true);
      Haptics.selectionAsync();
      ToastAndroid.show('Item added to cart.',ToastAndroid.SHORT);
    }
  }

  let [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!fonstLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <View
          style={{
            backgroundColor: "#4E8D7C",
            height: 153,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {/* <View style={{justifyContent:'center', alignItems:'center'}}> */}
            <Image
              style={{ width: 100, height: 120 }}
              source={{ uri: route.params.img }} //"../../assets/hotcoffee.png"
            />
            {/* </View> */}
            {/* <View style={{justifyContent:'center', alignItems:'center'}}> */}
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontFamily: "Poppins_500Medium",
                marginLeft: 10,
              }}>
              {route?.params?.name !== undefined
                ? route.params.name
                : "Pumpkin Spice Latte"}
            </Text>
            {/* </View> */}
          </View>
        </View>
        <View style={{ flex: 1, margin: 12 }}>
          <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
              What's included
            </Text>
          </View>

          <ScrollView>
            <View>
              <View style={{ padding: 20 }}>
                <Text style={styles.textStyle}>Cup Size</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    elevation: 4,
                    height: 50,
                    justifyContent: "center",
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Picker
                    selectedValue={cupSize}
                    onValueChange={(itemValue, itemIndex) =>
                      setCupSize(itemValue)
                    }>
                    <Picker.Item label='Select Cup Size' value='' />
                    <Picker.Item label='Small' value='Small' />
                    <Picker.Item label='Medium' value='medium' />
                    <Picker.Item label='Large' value='Large' />
                  </Picker>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={styles.textStyle}>Add-Ins</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    elevation: 4,
                    height: 50,
                    justifyContent: "center",
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Picker
                    selectedValue={addIn}
                    onValueChange={(itemValue, itemIndex) =>
                      setAddIn(itemValue)
                    }>
                      <Picker.Item label='Select Add-In' value='' />
                    <Picker.Item label='Normal Ice' value='Normal Ice' />
                    <Picker.Item label='Cinnamon' value='Cinnamon' />
                    <Picker.Item label='Nutmeg' value='Nutmeg' />
                    <Picker.Item label='Cocoa Powder' value='Cocoa Powder' />
                  </Picker>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={styles.textStyle}>Sweetner</Text>
                <View
                  style={{
                    flexDirection: "row",
                    elevation: 4,
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    height: 50,
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text>Splenda packet</Text>
                  <View>
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
                        onPress={()=>sweetner<1?setSweetner(0):setSweetner(sweetner-1)}
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
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 16,
                        }}>
                        <Text>{sweetner}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={()=>setSweetner(sweetner+1)}
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='add-outline' size={18} color='#9C4400' />
                      </TouchableOpacity>
                    </View>
                    <View></View>
                  </View>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={styles.textStyle}>Flavor</Text>
                <View
                  style={{
                    flexDirection: "row",
                    elevation: 4,
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    height: 50,
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text>Pumpkin Spice</Text>
                  <View>
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
                        onPress={()=>flavor<1?setFlavor(0):setFlavor(flavor-1)}
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
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 16,
                        }}>
                        <Text>{flavor}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={()=>setFlavor(flavor+1)}
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='add-outline' size={18} color='#9C4400' />
                      </TouchableOpacity>
                    </View>
                    <View></View>
                  </View>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={styles.textStyle}>Creamer</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    elevation: 4,
                    height: 50,
                    justifyContent: "center",
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Picker
                    selectedValue={creamer}
                    onValueChange={(itemValue, itemIndex) =>
                      setCreamer(itemValue)
                    }>
                    <Picker.Item label='Select Creamer' value='' /> 
                    <Picker.Item label='Oatmilk' value='Oatmilk' />
                    <Picker.Item label='Whole milk' value='Whole milk' />
                    <Picker.Item label='Skim milk' value='Skim milk' />
                    <Picker.Item label='Almond milk' value='Almond milk' />
                    <Picker.Item label='Soy milk' value='Soy milk' />
                    <Picker.Item label='Coconut milk' value='Coconut milk' />
                  </Picker>
                </View>
              </View>
              <View style={{ padding: 20, flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={addToCartHandler}
                  style={{
                    flex: 1,
                    elevation: 4,
                    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
                    padding: 10,
                    height: 60,
                    borderRadius: 22,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20,
                  }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Poppins_500Medium",
                    }}>
                    {itemAdded?'Go to Cart':'Add to Cart'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CustomizeOrder", {
                      name: route.params.name,
                      img: route.params.img,
                    })
                  }
                  style={{
                    flex: 1,
                    elevation: 4,
                    backgroundColor: GlobalStyles.colors.signUp.fillColor2,
                    padding: 10,
                    height: 60,
                    borderRadius: 22,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Poppins_500Medium",
                    }}>
                    Customize <Icon name='create-outline' size={14} />{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 40,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
