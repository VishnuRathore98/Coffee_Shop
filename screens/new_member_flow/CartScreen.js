import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from 'react-native-paper';
import { addToCart, removeFromCart } from '../../store/redux/store';
import { GlobalStyles } from "../../constants/styles";
import { Icon } from 'react-native-vector-icons/Ionicons'



export default function CartScreen({navigation}) {

  const cartItems = useSelector((state) => state.cartItems.items);
  const dispatch = useDispatch();
  // console.log("CartScreen==> ",cartItems);

  function buyAllButtonHandler(){
    return(
      <TouchableOpacity
              onPress={() => navigation.navigate("CheckOut")}
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
                Checkout All
              </Text>
            </TouchableOpacity>
    );
  }
  
  
  
  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });

    return (
      <View style={styles.rootContainer}>
          {cartItems.length == 0 ? (
            <View style={styles.cartContainer}>
              <Image
                style={styles.imageStyle}
                source={require("../../assets/shoppingbag.png")}
              />
              <Text style={styles.textStyle}>No item in your cart</Text>
            </View>
          ) : (
              // <ScrollView>
              <View style={styles.cardContainer}>
            <FlatList 
              data={cartItems}
              style={{padding:10}}
              renderItem={({item})=>
                // <Text>{item.name}</Text>
                <Card style={{marginBottom:10}}>
                  {/* {console.log(item)} */}
                  <Card.Title  title={item.name} titleVariant="titleMedium" titleStyle={{fontSize:18,fontFamily:'Poppins_500Medium'}}/>
                  <Card.Content>
                    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                      <View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Poppins_500Medium'}}>{item.cupSize.item}:</Text>                    
                          <Text style={{marginLeft:10}}>{item.cupSize.description}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Poppins_500Medium'}}>{item.addIn.item}:</Text>                    
                          <Text style={{marginLeft:10}}>{item.addIn.description}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Poppins_500Medium'}}>{item.creamer.item}:</Text>                    
                          <Text style={{marginLeft:10}}>{item.creamer.description}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Poppins_500Medium'}}>{item.flavor.item}:</Text>                    
                          <Text style={{marginLeft:10}}>{item.flavor.description}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontFamily:'Poppins_500Medium'}}>{item.sweetner.item}:</Text>                    
                          <Text style={{marginLeft:10}}>{item.sweetner.description}</Text>
                        </View>
                      </View>
                      <View style={{}}>
                        <Image style={{ width: 110, height: 120, }} source={{uri:item.img}} />
                      </View>
                    </View>
                  </Card.Content>
                  <Card.Actions>
                    <Button style={{}} onPress={()=>navigation.navigate('CheckOut',{item})}>Buy now</Button>
                    <Button style={{backgroundColor:'#b70000'}} onPress={()=>dispatch(removeFromCart({id:item.id}))}>Remove</Button>
                    {/* <TouchableOpacity><Icon size={24} name="trash-outline"/></TouchableOpacity> */}
                  </Card.Actions>
                </Card>
              }
              keyExtractor={item => item.id}
              ListFooterComponent={buyAllButtonHandler}
            />
            </View>
            
          )
          }
      </View>
    );
  }


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 12,
    height: 160,
  },
  cardContainer:{
    justifyContent:'center',
    alignContent:'center',
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#4A4747",
  },
  imageStyle: {
    height: 48,
    width: 48,
    marginBottom: 12,
  },
});
