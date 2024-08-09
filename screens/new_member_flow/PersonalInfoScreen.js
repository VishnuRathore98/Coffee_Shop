import { useState } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";

export default function PersonalInfoScreen(navigation) {

const [name, setName] = useState("John Constantine");
const [email, setEmail] = useState("john.constantine@mail.com");
const [phoneNumber, setPhoneNumber] = useState("+91 9876543210");
const [address, setAddress] = useState("New york, USA");
const [newPassword, setNewPassword] = useState("");

  return (
    <View style={styles.rootContainer}>
      <View style={styles.userProfile}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../assets/usericon.png")}
        />
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:2}}><Text>Edit Image</Text><Icon name="create-outline" size={20}/></TouchableOpacity>
      </View>
    <View style={styles.infoContainer}>
      
        {/* Full Name */}
        <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
            <Icon name="person-circle-outline" size={24}/>
            <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter your name" value={name}/>
        </View>

        {/* Email address */}
        <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
            <Icon name="mail-outline" size={24}/>
            <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter your email" value={email} editable={false}/>
        </View>
        
        {/* Phone Number */}
        <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
            <Icon name="call-outline" size={24}/>
            <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter your phone no." value={phoneNumber} keyboardType="number-pad"/>
        </View>

        {/* Address */}
        <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
            <Icon name="location-outline" size={24}/>
            <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter your location" value={address} cursorColor='black'/>
        </View>

        {/* Change Password */}
        <View style={{ borderWidth:1, padding:2, width:350}}>
            <Text style={{textAlign:'left'}}>Change Password</Text>
            {/* Old Password */}
            <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
                <Icon name="lock-closed-outline" size={24}/>
                <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter Old Password"/>
            </View>
            {/* New Password */}
            <View style={{flexDirection:'row',  alignItems:'center', borderWidth:1, padding:2, width:350}}>
                <Icon name="lock-closed-outline" size={24}/>
                <TextInput style={styles.inputContainer} autoCapitalize="words" placeholder="Enter New Password"/>
            </View>
        <TouchableOpacity style={{backgroundColor:'blue', flexDirection:'row', height:50, justifyContent:'center', alignItems:'center', borderRadius:22, marginVertical:10}}>
        {/* <Icon name="trash-outline" color='white' size={24}/> */}
        <Text style={{color:'white'}}>Save Changes</Text>
      </TouchableOpacity>
        </View>
      </View>

      <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
      <TouchableOpacity style={{backgroundColor:'#a81111', flexDirection:'row', width:250, height:50, justifyContent:'center', alignItems:'center', borderRadius:22}}>
        <Icon name="trash-outline" color='white' size={24}/>
        <Text style={{color:'white'}}>Delete Account</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding:20,
    
    backgroundColor: "#F6F2ED",
  },
  userProfile: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer:{
    justifyContent:'center',
    alignItems:'flex-start'
  },
  inputContainer:{
    
    // backgroundColor:'grey',
    borderWidth:0.2,
    padding:4,

  },
});
