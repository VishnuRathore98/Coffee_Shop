import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from 'react-native-paper';
import { addToCart, removeFromCart } from '../../store/redux/store';


export default function CartScreen({navigation}) {
  const cartItems = useSelector((state) => state.cartItems.items);
  const dispatch = useDispatch();
  let [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
            
              <View style={styles.cardContainer}>
            <FlatList 
              data={cartItems}
              renderItem={({item})=>
                // <Text>{item.name}</Text>
                <Card>
                  {console.log(item)}
                  <Card.Title title={item.name}/>
                  <Card.Content style={{flexDirection:'row'}}>
                  <Text>{item.cupSize.item}</Text>                    
                  <Text>{item.cupSize.description}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button style={{backgroundColor:'red'}} onPress={()=>navigation.navigate('')}>Buy now</Button>
                    <Button style={{backgroundColor:'red'}} onPress={()=>dispatch(removeFromCart({id:item.id}))}>Remove</Button>
                  </Card.Actions>
                </Card>
              }
              keyExtractor={item => item.id}
            />
            </View>
            
          )}
      </View>
    );
  }
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
