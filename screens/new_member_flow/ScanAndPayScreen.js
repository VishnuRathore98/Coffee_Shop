import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  TextInput,
  Button,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useState, useRef, useCallback, useMemo } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-reanimated-carousel";
import { StripeProvider } from '@stripe/stripe-react-native';


export default function ScanAndPayScreen() {
  const [scanAndPaySelected, setScanAndPaySelected] = useState(true);
  const [rewardSelected, setRewardSelected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const ref = useRef(null);

  // function cardModleHandler(){
  //     if (isModalVisible) {
  //       console.log("in modal");
  //     return (
        
  //     );
  //     }else{
  //       console.log("out of modal");
  //       return null;
  //     }
  // }

  const views1 = [
    {
      id: 1,
      img: "../../assets/paycards/defaultCard.png",
    },
    {
      id: 2,
      img: "../../assets/paycards/masterCard.png",
    },
    {
      id: 3,
      img: "../../assets/paycards/visaCard.png",
    },
    {
      id: 4,
      img: "../../assets/paycards/defaultCard.png",
    },
  ];

  function scanAndPayHandler() {
    if (!scanAndPaySelected) {
      setScanAndPaySelected(true);
      setRewardSelected(false);
    }
  }
  function rewardHandler() {
    if (!rewardSelected) {
      setRewardSelected(true);
      setScanAndPaySelected(false);
    }
  }
  function renderItem1({ index, item }) {
    // console.log(item.img);
    return (
      <View>
        {/* <Image source={require(item.img)} height={500} width={300}/> */}
      </View>
    );
  }


  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    
  });
  if (!fontsLoaded) {
    <View style={styles.loaderContainer}>
      <ActivityIndicator size='large' color='brown' />
    </View>;
  } else {
  return (
    <View style={styles.rootContainer}>
        
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderBottomWidth: 2,
            borderColor: scanAndPaySelected ? "#024B1F" : "#EFEBE9",
          }}
          onPress={scanAndPayHandler}>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            Scan & Pay
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderBottomWidth: 2,
            borderColor: rewardSelected ? "#024B1F" : "#EFEBE9",
          }}
          onPress={rewardHandler}>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            Rewards Only
          </Text>
        </TouchableOpacity>
      </View>
      
      {scanAndPaySelected ? (
        // Carousel will go in here

        <Carousel
          vertical={false}
          width={360}
          height={560}
          ref={ref}
          style={{ borderRadius: 30 }}
          autoPlay={false}
          data={views1}
          renderItem={({ index, item }) => {
            // console.log(index, item.img);

            switch (index) {
              
              case 0:
                return (
                  <ImageBackground
                    source={require("../../assets/paycards/defaultCard.png")}
                    style={styles.backgroundImage}
                    resizeMode='cover'>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 40,
                      }}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        Rewards
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        <Icon name='star-half-outline' size={24} />
                        1300
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 50,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        $52.17
                      </Text>
                      <Icon name='qr-code-outline' color='white' size={200} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 50,
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='logo-usd' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Add Funds
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={()=>setIsModalVisible(true)}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='settings-outline' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Manage
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                );
              
                case 1:
                return (
                  <ImageBackground
                    source={require("../../assets/paycards/masterCard.png")}
                    style={styles.backgroundImage}
                    resizeMode='cover'>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <Image
                        style={{ height: 80, width: 150 }}
                        source={require("../../assets/paycards/masterLogo.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        x1234
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Icon name='qr-code-outline' color='white' size={200} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon
                          name='checkmark-circle-outline'
                          color='white'
                          size={15}
                        />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Make Default
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                       onPress={()=>setIsModalVisible(true)}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='settings-outline' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Manage
                        </Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='trash' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                );

              case 2:
                return (
                  <ImageBackground
                    source={require("../../assets/paycards/visaCard.png")}
                    style={styles.backgroundImage}
                    resizeMode='cover'>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <Image
                        style={{ height: 80, width: 150 }}
                        source={require("../../assets/paycards/visaLogo.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontFamily: "Poppins_500Medium",
                        }}>
                        x4321
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Icon name='qr-code-outline' color='white' size={200} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon
                          name='checkmark-circle-outline'
                          color='white'
                          size={15}
                        />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Make Default
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                       onPress={()=>setIsModalVisible(true)}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='settings-outline' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Manage
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Icon name='trash' color='white' size={15} />
                        <Text style={{ color: "white", fontSize: 15 }}>
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                );
              
                case 3:
                  return (
                    
                     <ImageBackground
                       source={require("../../assets/paycards/defaultCard.png")}
                       style={styles.backgroundImage}
                       resizeMode='cover'>
                      
                      <View
                        style={{
                          flex:1,
                          justifyContent: "center",
                          alignItems: "center",
                          
                        }}>
                        <TouchableOpacity onPress={()=>setIsModalVisible(true)}><Icon name='add' color='white' size={200} /></TouchableOpacity>
                        <Text style={{color:'white', fontSize:18}}>Add Card</Text>
                      </View>
                      
                    </ImageBackground>
                    
                  );

              default:
                break;
            }
          }}
        />
      ) : 
        (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}>
          <Text style={{ fontSize: 50 }}>
            <Icon name='star-half-outline' size={50} />
            1300
          </Text>
          <Icon name='qr-code-outline' size={200} />
     
        </View>
        )
      } 

      <StripeProvider>
      <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)} // Close modal on back button press (Android)
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 20,
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Card Details
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Card Name"
                placeholderTextColor="#aaa"
              />
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                secureTextEntry={true}
              />
              <View style={styles.modalButtons}>
                <Button
                  title="Save"
                  onPress={() => {
                    // Save logic goes here
                    setIsModalVisible(false);
                  }}
                />
                <Button
                  title="Cancel"
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </View>
          </View>
      </Modal>
      </StripeProvider>

    </View>
  );
}
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F2ED",
  },
  backgroundImage: {
    flex: 1, // Fullscreen coverage
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  renderItem1_parentView: {
    borderRadius: 18,
    height: 550,
    width: 350,
  },
  renderItem1_view1: {
    width: 80,
    position: "absolute",
    fontSize: 20,
    top: 10,
    right: 20,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    alignItems: "center",
  },
  renderItem1_view2: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  renderItem1_img: {
    width: 350,
    height: 200,
  },
  renderItem1_text1: {
    fontWeight: "700",
    color: "#000000",
  },
  renderItem1_text2: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  renderItem1_text3: {
    marginVertical: 12,
    color: "blue",
    fontWeight: "bold",
  },
  carouselContainer: {
    borderRadius: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "#F6F2ef",
    borderRadius: 18,
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
