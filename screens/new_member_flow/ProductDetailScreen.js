import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
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

export default function ProductDetailScreen() {
  const [cupSize, setCupSize] = useState("");
  const [addIn, setAddIn] = useState("");
  const [creamer, setCreamer] = useState("");
  
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
        <View style={{ backgroundColor: "#4E8D7C", height: 153 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 100, height: 120 }}
              source={require("../../assets/coldcoffee.png")}
            />
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontFamily: "Poppins_500Medium",
              }}
            >
              Pumpkin Spice Lattee
            </Text>
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
              <View style={{backgroundColor:'white', elevation:4, height:50, justifyContent:'center', padding:10, borderRadius:5}}>
              <Picker 
                selectedValue={cupSize} 
                onValueChange={(itemValue, itemIndex) => setCupSize(itemValue)}>
                    <Picker.Item  label="Small" value="1" />
                    <Picker.Item  label="Medium" value="2" />
                    <Picker.Item  label="Large" value="3" />
                </Picker>
                </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.textStyle}>Add-Ins</Text>
              <View style={{backgroundColor:'white', elevation:4, height:50, justifyContent:'center', padding:10, borderRadius:5}}>
              <Picker 
                selectedValue={addIn} 
                onValueChange={(itemValue, itemIndex) => setAddIn(itemValue)}>
                    <Picker.Item  label="Normal Ice" value="1" />
                    <Picker.Item  label="Cinnamon" value="2" />
                    <Picker.Item  label="Nutmeg" value="3" />
                    <Picker.Item  label="Cocoa Powder" value="4" />
                </Picker>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.textStyle}>Sweetner</Text>
              <View
                style={{
                  flexDirection: "row", 
                  elevation:4,
                  justifyContent: "space-between",
                  backgroundColor:'white', height:50, alignItems:'center', padding:10, borderRadius:5
                }}
              >
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
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="remove-outline" size={18} color="#9C4400" />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderRadius: 4,
                        height: 24,
                        width: 36,
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 16,
                      }}
                    >
                      <Text>0</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="add-outline" size={18} color="#9C4400" />
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
                  elevation:4,
                  justifyContent: "space-between",
                  backgroundColor:'white', height:50, alignItems:'center', padding:10, borderRadius:5
                }}
              >
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
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="remove-outline" size={18} color="#9C4400" />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderRadius: 4,
                        height: 24,
                        width: 36,
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 16,
                      }}
                    >
                      <Text>0</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="add-outline" size={18} color="#9C4400" />
                    </TouchableOpacity>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.textStyle}>Creamer</Text>
              <View style={{backgroundColor:'white', elevation:4, height:50, justifyContent:'center', padding:10, borderRadius:5}}>
              <Picker 
                selectedValue={creamer} 
                onValueChange={(itemValue, itemIndex) => setCreamer(itemValue)}>
                    <Picker.Item  label="Oatmilk" value="1" />
                    <Picker.Item  label="Whole milk" value="2" />
                    <Picker.Item  label="skim milk" value="3" />
                    <Picker.Item  label="Almond milk" value="4" />
                    <Picker.Item  label="soy milk" value="5" />
                    <Picker.Item  label="coconut milk" value="6" />
                </Picker>
              </View>
            </View>
          <View style={{padding:20, flexDirection:'row', }}>            
           
          <TouchableOpacity
            style={{
                flex:1,
                elevation:4,
              backgroundColor: GlobalStyles.colors.signUp.fillColor1,
              padding:10,
              height: 60,
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
              marginRight:20
            }}>

            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins_500Medium",
              }}>Add to Cart</Text>

          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
                flex:1,
                elevation:4,
              backgroundColor: GlobalStyles.colors.signUp.fillColor2,
              padding:10,
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
              }}>Customize <Icon name="create-outline" size={14}/> </Text>

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
