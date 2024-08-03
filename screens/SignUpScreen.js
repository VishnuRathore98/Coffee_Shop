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

import axios from "axios";
import { useState } from "react";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState('');

  async function createUser() {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          "AIzaSyCcqcUQ4pwUfXcK_RMBVkOpBFaTezpqQag",
        {
          // username:username,
          email: email,
          password: password,
          // username:username,
        }
      );
      // console.log(response.data.email);

      // console.log(response.data);
      if (response.data.email == email) {
        Alert.alert("Success", "User successfully created", [
          { onPress: () => navigation.navigate("SignIn") },
        ]);
        // console.log("success");
      } else {
        Alert.alert("Failure!", "User not created, please try again.");
        // console.log(response.data);
      }
    } catch (e) {
      Alert.alert("Error", "User already registered.");
      // console.log(e);
    }
  }

  function emailHandler(text) {
    setEmail(text);
    // console.log(email);
  }

  function passwordHandler(text) {
    setPassword(text);
    // console.log(password);
  }

  // function usernameHandler(text){
  //   setUsername(text);
  // }

  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
if (!fontsLoaded) {
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <ActivityIndicator size='large' color='brown' />
  </View>
} else {
  
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
                  Sign Up
                </Text>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor1,
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  We are so excited you’re ready to become apart of our coffee
                  network! don’t forget check out your perks!
                </Text>
              </View>
              {/* <View>
              <Text
                style={{
                  marginBottom: 10,
                  color: GlobalStyles.colors.signUp.fillColor2,
                  fontSize: 14,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Username
              </Text>
              <TextInput onChangeText={(text)=>usernameHandler(text)} style={styles.textInput} placeholder="Enter username"></TextInput>
            </View> */}
              <View>
                <Text
                  style={{
                    marginBottom: 10,
                    color: GlobalStyles.colors.signUp.fillColor2,
                    fontSize: 14,
                    fontFamily: "Poppins_600SemiBold",
                  }}>
                  Email or phone number
                </Text>
                <TextInput
                  onChangeText={(text) => emailHandler(text)}
                  keyboardType='email-address'
                  style={styles.textInput}
                  placeholder='Type your email or phone number'></TextInput>
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
                  keyboardType='default'
                  style={styles.textInput}
                  placeholder='Type your password'
                  passwordRules='minlength: 8;'></TextInput>
              </View>
            </View>
            <View
              style={[styles.userInteractionContainer, { marginBottom: 8 }]}>
              <Pressable
                onPress={createUser}
                android_ripple={{ color: "#F6F2ED" }}
                style={styles.button}>
                <Text
                  style={{
                    color: "#F6F2ED",
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  REGISTER
                </Text>
              </Pressable>

              <Text
                style={{
                  color: GlobalStyles.colors.signUp.fillColor1,
                  fontSize: 14,
                  fontFamily: "Poppins_400Regular",
                }}>
                Already have an account?
              </Text>

              <Pressable
                onPress={() => navigation.navigate("SignIn")}
                android_ripple={{ color: "#F6F2ED" }}
                style={styles.button}>
                <Text
                  style={{
                    color: "#F6F2ED",
                    fontSize: 14,
                    fontFamily: "Poppins_400Regular",
                  }}>
                  SIGN IN
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
  },
});
