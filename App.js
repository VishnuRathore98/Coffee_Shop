import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  Text
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
import ReceiptScreen from "./screens/new_member_flow/ReceiptScreen";
import CustomizeOrder from "./screens/new_member_flow/CustomizeOrder";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "./constants/styles";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function logoutPopUp({navigation}){
  Alert.alert("LogOut", "Are you sure you want to logout?", [
    {
      text:'Yes',
      onPress:()=>navigation.navigate('SignIn'),

    },
    {
      text:'No',
      // onPress:()=>
      style:'cancel'
    }
  ]);
}

// Bottom Tab Navigator
function Home({navigation}) {
  // console.log("Parent:"+navigation.getParent+"\nID:"+navigation.getParam);
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
// TODO: Need to add user profile in drawer, as in account screen.
// TODO: Need to add icons in drawer.
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
    initialRouteName="Home Tab"
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
       drawerStyle:{backgroundColor:'#F6F2ED'},

      }}
    >
      <Drawer.Screen name="User" component={AccountScreen} options={{drawerLabel:()=>(<View><Text style={{fontSize:20, fontFamily:'Poppins_500Medium',color:'#434343'}}>Welcome,</Text><Text style={{fontSize:20, fontFamily:'Poppins_500Medium',color:'#434343'}}>John</Text></View>),drawerLabelStyle:{fontSize:20,},  drawerIcon:()=>(<Image style={{ height:72, width:72,}} source={require('./assets/usericon.png')}/>), drawerItemStyle:{height:100, justifyContent:'center', }}}/>
      <Drawer.Screen name="Home Tab" component={Home} options={{drawerIcon:({size})=>(<Icon size={size} name="home-outline"/>)}}/>
      <Drawer.Screen name="OrderScreen" component={OrderScreen} options={{ drawerLabel:'My Orders', drawerIcon:({size})=>(<Icon size={size} name="fast-food-outline"/>)}}/>
      <Drawer.Screen name="Cart" component={CartScreen} options={{ drawerLabel:'My Cart', drawerIcon:({size})=>(<Icon size={size} name="cart-outline"/>)}}/>
      <Drawer.Screen name="CheckOut" component={CheckOutScreen} options={{drawerIcon:({size})=>(<Icon size={size} name="bag-check-outline"/>)}}/>
      <Drawer.Screen name="TrackOrderScreen" component={TrackOrderScreen} options={{drawerLabel:'Track My Order', drawerIcon:({size})=>(<Icon size={size} name="location-outline"/>)}}/>
      <Drawer.Screen name="ReceiptScreen" component={ReceiptScreen} options={{drawerLabel:'Order Receipt', drawerIcon:({size})=>(<Icon size={size} name="receipt-outline"/>)}}/>
      <Drawer.Screen name="Logout" component={Home} listeners={(navigation)=>({drawerItemPress:()=>{logoutPopUp(navigation)}})} options={{ drawerIcon:({size})=>(<Icon size={size} name="log-out-outline"/>), }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
          <Stack.Screen name="HomeScreen" component={DrawerNavigation}/>
          <Stack.Screen name="ScreenOne" component={ScreenOne}/>
          <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>
          <Stack.Screen name="ScreenThree" component={ScreenThree}/>
          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
          <Stack.Screen name="CustomizeOrder" component={CustomizeOrder} />
          <Stack.Screen name="CartScreen" component={CartScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
