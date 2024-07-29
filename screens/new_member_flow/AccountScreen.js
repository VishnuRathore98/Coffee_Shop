import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { GlobalStyles } from "../../constants/styles";

export default function AccountScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function logoutPopUp() {
    Alert.alert("LogOut", "Are you sure you want to logout?", [
      {
        text: "Yes",
        onPress: () => navigation.navigate("SignIn"),
      },
      {
        text: "No",
        // onPress:()=>
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        {/* Account */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            // borderBottomWidth:0.2,
            // borderStyle:'dotted',
          }}>
          <View>
            <Text style={{ fontSize: 30, fontFamily: "Poppins_600SemiBold" }}>
              Account
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
              Welcome John!
            </Text>
          </View>
          <View>
            <Image
              style={{ height: 62, width: 62 }}
              source={require("../../assets/usericon.png")}
            />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          {/* Profile */}

          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_600SemiBold",
                padding: 10,
                borderBottomWidth: 0.2,
                borderStyle: "dotted",
              }}>
              Profile
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                marginBottom: 2,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Personal Info
              </Text>
              <Icon
                name='information-circle-outline'
                size={24}
                color='#434343'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                marginBottom: 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Cards & Payments
              </Text>
              <Icon name='card-outline' size={24} color='#434343' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                marginBottom: 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Transaction History
              </Text>
              <Icon name='reader-outline' size={24} color='#434343' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                marginBottom: 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Privacy & Data
              </Text>
              <Icon name='hand-left-outline' size={24} color='#434343' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                marginBottom: 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Account ID
              </Text>
              <Icon name='id-card-outline' size={24} color='#434343' />
            </TouchableOpacity>
          </View>

          {/* Security */}

          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_600SemiBold",
                padding: 10,
                borderBottomWidth: 0.2,
                borderStyle: "dotted",
              }}>
              Security
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                2-factor authentication
              </Text>

              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Face ID
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Passcode Lock
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          {/* Notification Preferences */}

          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_600SemiBold",
                padding: 10,
                borderBottomWidth: 0.2,
                borderStyle: "dotted",
              }}>
              Notification Preferences
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Email notifications
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Push notifications
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              {/* <Text></Text> */}
              {/* <Icon /> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Special Offers
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              {/* <Text></Text> */}
              {/* <Icon /> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Event Reminders
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              {/* <Text></Text> */}
              {/* <Icon /> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_400Regular",
                  color: "#434343",
                }}>
                Security Alerts
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#34C759" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              {/* <Text></Text> */}
              {/* <Icon /> */}
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Pressable
              onPress={logoutPopUp}
              android_ripple={{ color: "#F6F2ED" }}
              style={styles.button}>
              <Text
                style={{
                  color: "#F6F2ED",
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                }}>
                LogOut
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems:'center',
    backgroundColor: "#F6F2ED",
  },
  button: {
    height: 60,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
  },
});
