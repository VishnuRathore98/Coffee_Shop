import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";
import { GlobalImages } from "../../constants/images";

export default function OrderScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {/* Drinks */}

        <View style={styles.drinksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins_600SemiBold" }}>
              Drinks
            </Text>
            {/* <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity> */}
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.hotCoffees,
                    name: "Hot Coffees",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.hotCoffees }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Hot Coffees
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.hotTeas,
                    name: "Hot Teas",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.hotTeas }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Hot Teas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.hotDrinks,
                    name: "Hot Drinks",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.hotDrinks }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Hot Drinks
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.frappucino,
                    name: "Frappucino",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.frappucino }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Frappucino
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.coldCoffees,
                    name: "Cold Coffees",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.coldCoffees }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Cold Coffees
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.icedTeas,
                    name: "Iced Teas",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.icedTeas }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Iced Teas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.coldDrinks,
                    name: "Cold Drinks",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.coldDrinks }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Cold Drinks
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Food */}

        <View style={styles.drinksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins_600SemiBold" }}>
              Food
            </Text>
            {/* <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity> */}
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.hotBreakfast,
                    name: "Hot Breakfast",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.hotBreakfast }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Hot Breakfast
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.bakery,
                    name: "Bakery",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.bakery }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Bakery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.treats,
                    name: "Treats",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.treats }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Treats
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* At Home Coffee */}

        <View style={styles.drinksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins_600SemiBold" }}>
              At Home Coffee
            </Text>
            {/* <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity> */}
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.wholeBean,
                    name: "Whole Bean",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.wholeBean }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Whole Bean
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.tea,
                    name: "Tea",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.tea }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Tea
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Merchandise */}

        <View style={styles.drinksContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins_600SemiBold" }}>
              Merchandise
            </Text>
            {/* <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity> */}
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.personalizedColdCup,
                    name: "Personalized Cold Cup",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.personalizedColdCup }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Personalized Cold Cup
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.personalizedTumblers,
                    name: "Personalized Tumblers",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.personalizedTumblers }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Personalized Tumblers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.personalizedMugs,
                    name: "Personalized Mugs",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.personalizedMugs }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Personalized Mugs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    img: GlobalImages.other,
                    name: "Other",
                  })
                }
                style={{
                  elevation: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  maxWidth: 108,
                }}>
                <Image
                  style={{ width: 110, height: 120 }}
                  source={{ uri: GlobalImages.other }}
                />
                <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
                  Other
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#F6F2ED",
  },
  drinksContainer: {
    flex: 1,
    margin: 18,
  },
});
