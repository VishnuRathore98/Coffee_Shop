import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";


import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import axios from "axios";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(text) {
    setEmail(text);
    // console.log(text);
  }

  function passwordHandler(text) {
    setPassword(text);
    // console.log(text);
  }

  async function loginUser() {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          "AIzaSyCcqcUQ4pwUfXcK_RMBVkOpBFaTezpqQag",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response);
      if (response.data.email == email) {
        navigation.navigate("ScreenOne");
      } else {
        Alert.alert("Login Failed", "Incorrect email or password");
      }
    } catch (e) {
      Alert.alert("Error", "User not registered");
      // console.log("Response:", response);
      // console.log("Error:", e);
    }
  }

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
if (!fontsLoaded) {
  <View style={styles.loaderContainer}>
  <ActivityIndicator size="large" color="brown"/>
  </View>
} else 

 {
  

    return (
      <View style={styles.rootContainer}>
        <View style={styles.oneFifth}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.skipButton}>
            <Text>Skip</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/signupScreenAssets/cup.png")}
            />
          </View>
        </View>

        <View style={styles.fourFifths}>
          <ScrollView>
            <View style={styles.userInputContainer}>
              <View>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor1,
                    fontSize: 28,
                    fontFamily: "Poppins_800ExtraBold",
                  }}>
                  Sign In
                </Text>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor1,
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  It’s coffee time! Login and lets get all the coffee in the
                  world! Or at least iced coffee.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor2,
                    fontSize: 14,
                    fontFamily: "Poppins_600SemiBold",
                  }}>
                  Email
                </Text>
                <TextInput
                  onChangeText={(text) => emailHandler(text)}
                  style={styles.textInput}
                  placeholder='Enter your email'></TextInput>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor2,
                    fontSize: 14,
                    fontFamily: "Poppins_600SemiBold",
                  }}>
                  Password
                </Text>
                <TextInput
                  onChangeText={(text) => passwordHandler(text)}
                  style={styles.textInput}
                  placeholder='Type your password'></TextInput>
              </View>
            </View>
            <View style={styles.userInteractionContainer}>
              <Pressable
                onPress={loginUser}
                android_ripple={{ color: "#F6F2ED" }}
                style={styles.button}>
                <Text
                  style={{
                    color: "#F6F2ED",
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  LOGIN
                </Text>
              </Pressable>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#4E8D7C",
                    fontSize: 16,
                    fontFamily: "Poppins_400Regular",
                    marginRight: 10,
                  }}>
                  Forgot your password?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: GlobalStyles.colors.signUp.fillColor1,
                      fontSize: 14,
                      fontFamily: "Poppins_400Regular",
                    }}>
                    Reset here
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6C6B6B",
                  fontSize: 14,
                  fontFamily: "Poppins_400Regular",
                }}>
                Don't have an account?
              </Text>

              <Pressable
                onPress={() => navigation.navigate("SignUp")}
                android_ripple={{ color: "#F6F2ED" }}
                style={styles.button}>
                <Text
                  style={{
                    color: "#F6F2ED",
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  CREATE NEW ACCOUNT
                </Text>
              </Pressable>
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
    backgroundColor: GlobalStyles.colors.primary,
  },
  loaderContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  oneFifth: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
  fourFifths: {
    flex: 4,
    backgroundColor: GlobalStyles.colors.signUp.details,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    elevation: 25,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    height: 89.45,
    width: 56.77,
    marginBottom: 10,
  },
  skipButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  userInteractionContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginVertical: 10,
    alignItems: "center",
  },
  userInputContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 46,
    paddingTop: 18,
  },
  textInput: {
    elevation: 5,
    shadowColor: "#989898",
    borderRadius: 22,
    height: 60,
    width: 318,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    fontFamily: "Poppins_400Regular",
    marginBottom: 14,
  },
  button: {
    width: 320,
    height: 60,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.signUp.fillColor1,
    marginVertical: 16,
  },
}
);
