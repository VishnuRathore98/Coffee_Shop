import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import LoadingOverlay from "./components/UI/LoadingOverlay";
import ScreenOne from "./components/onboarding/ScreenOne";
import ScreenTwo from "./components/onboarding/ScreenTwo";
import ScreenThree from "./components/onboarding/ScreenThree";
import HomeScreen from "./screens/new_member_flow/HomeScreen";
import CartScreen from "./screens/new_member_flow/CartScreen";
import CheckOutScreen from "./screens/new_member_flow/CheckOutScreen";
import OrderScreen from "./screens/new_member_flow/OrderScreen";
import ProductDetailScreen from "./screens/new_member_flow/ProductDetailScreen";
import TrackOrderScreen from "./screens/new_member_flow/TrackOrderScreen";

import ScanAndPayScreen from "./screens/new_member_flow/ScanAndPayScreen";
import AccountScreen from "./screens/new_member_flow/AccountScreen";
import RewardScreen from "./screens/new_member_flow/RewardScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();


// Bottom Tab Navigator
function Home() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home-outline" size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="cafe-outline" size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Scan/Pay"
        component={ScanAndPayScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="qr-code-outline" size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="person-circle-outline" size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="star-outline" size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function DrawerNavigation() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image
            style={{ height: 48, width: 30, marginRight: 20 }}
            source={require("../Coffee_Shop/assets/headercoffeecup.png")}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
            <Icon
              name="bag-handle-outline"
              size={34}
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home Tab" component={Home} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="CheckOut" component={CheckOutScreen} />
      <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Drawer.Screen name="TrackOrder" component={TrackOrderScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
