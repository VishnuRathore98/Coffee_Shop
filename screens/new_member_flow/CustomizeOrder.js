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
    Poppins_700Bold
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
  
  export default function CustomizeOrder() {
    const [cupSize, setCupSize] = useState("");
    const [addIn, setAddIn] = useState("");
    const [creamer, setCreamer] = useState("");
    
    let [fonstLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold
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
            <ScrollView>
          <View style={{ flex: 1, margin: 12 }}>

            <TouchableOpacity style={{ padding: 12, flexDirection:'row'}}>
                <View style={{ justifyContent:'center', alignItems:'center', marginRight:6}}><Icon name="chevron-back" size={16}/></View>
                <View style={{ justifyContent:'center', alignItems:'center'}}><Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold"}}>Done Customizing</Text></View>
            </TouchableOpacity>
  
            <View>

{/* Cup Options */}  
              <View style={{ padding: 10, backgroundColor:'white', marginBottom:8, elevation:4, borderRadius:5 }}>
                <Text style={{fontFamily:'Poppins_600SemiBold', fontSize:15}}>Cup Options</Text>

                <View style={{ padding: 16, }}>
                <Text style={styles.textStyle}>Cup Size</Text>
                <View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
                <Picker 
                  selectedValue={cupSize} 
                  onValueChange={(itemValue, itemIndex) => setCupSize(itemValue)}>
                      <Picker.Item  label="Small" value="1" />
                      <Picker.Item  label="Medium" value="2" />
                      <Picker.Item  label="Large" value="3" />
                  </Picker>
                  </View>
                  </View>
              </View>
              
{/* Add-Ins */}
<View>
<View style={{ padding: 10, backgroundColor:'white', marginBottom:8, elevation:4, borderRadius:5 }}>
<Text style={{fontFamily:'Poppins_600SemiBold', fontSize:15}}>Add-Ins</Text>
<View style={{ padding: 16 }}>
<Text style={styles.textStyle}>Ice</Text>
<View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
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
<View style={{ padding: 16 }}>
<Text style={styles.textStyle}>Creamer</Text>
<View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
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
</View>
</View>

{/* Sweetners */}
<View>
              <View style={{ padding: 10, backgroundColor:'white', marginBottom:8, elevation:4, borderRadius:5 }}>
                <Text style={{fontFamily:'Poppins_600SemiBold', fontSize:15}}>Sweetners</Text>

              <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Sweetner</Text>
                <View
                  style={{
                    elevation:4, 
                    flexDirection: "row",
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
                        borderWidth:0.1,
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
              <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Sweetner</Text>
                <View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
                <Picker 
                  selectedValue={creamer} 
                  onValueChange={(itemValue, itemIndex) => setCreamer(itemValue)}>
                      <Picker.Item  label="Splenda" value="1" />
                      <Picker.Item  label="Stevia" value="2" />
                      <Picker.Item  label="aspartame" value="3" />
                  </Picker>
                </View>
              </View>
       
</View>
</View>

{/* Flavors */}
<View>
              <View style={{ padding: 10, backgroundColor:'white', marginBottom:8, elevation:4, borderRadius:5 }}>
                <Text style={{fontFamily:'Poppins_600SemiBold', fontSize:15}}>Flavors</Text>

              <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Flavor</Text>
                <View
                  style={{
                    elevation:2,
                    flexDirection: "row",
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
                        borderWidth:0.1,
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
              <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Flavor</Text>
                <View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
                <Picker 
                  selectedValue={creamer} 
                  onValueChange={(itemValue, itemIndex) => setCreamer(itemValue)}>
                      <Picker.Item  label="Vanilla" value="1" />
                      <Picker.Item  label="caramel" value="2" />
                      <Picker.Item  label="hazelnut" value="3" />
                      <Picker.Item  label="chocolate" value="4" />
                  </Picker>
                </View>
              </View>
</View>
</View>

{/* Espresso and Shot Options */}

<View>
              <View style={{ padding: 10, backgroundColor:'white', marginBottom:8, elevation:4, borderRadius:5 }}>
                <Text style={{fontFamily:'Poppins_600SemiBold', fontSize:15}}>Espresso and Shot Options</Text>

                <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Espresso</Text>
                <View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
                <Picker 
                  selectedValue={creamer} 
                  onValueChange={(itemValue, itemIndex) => setCreamer(itemValue)}>
                      <Picker.Item  label="Americano" value="1" />
                      <Picker.Item  label="Macchiato" value="2" />
                      <Picker.Item  label="Cortado" value="3" />
                      <Picker.Item  label="Cappuccino" value="4" />
                      <Picker.Item  label="Latte" value="5" />
                      <Picker.Item  label="Flat White" value="6" />
                      <Picker.Item  label="Mocha" value="7" />

                  </Picker>
                </View>
              </View>
              <View style={{ padding: 16 }}>
                <Text style={styles.textStyle}>Shot</Text>
                <View style={{elevation:4, backgroundColor:'white', height:50, justifyContent:'center', padding:10, borderRadius:5}}>
                <Picker 
                  selectedValue={creamer} 
                  onValueChange={(itemValue, itemIndex) => setCreamer(itemValue)}>
                      <Picker.Item  label="Single Shot (Solo)" value="1" />
                      <Picker.Item  label="Double Shot (Doppio)" value="2" />
                      <Picker.Item  label="Ristretto" value="3" />
                      <Picker.Item  label="Lungo" value="4" />
                  </Picker>
                </View>
              </View>
</View>
</View>

{/* Button */}
            <View style={{padding:20, }}>            
            <TouchableOpacity
              style={{
                  flex:1,
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
                }}>Done Customizing <Icon name="create-outline" size={14}/> </Text>
  
            </TouchableOpacity>
            </View>
            </View>
  
          </View>
            </ScrollView>
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
  