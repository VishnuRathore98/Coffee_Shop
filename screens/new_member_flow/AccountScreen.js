import { StyleSheet, Text, View, Image } from "react-native";
import {Icon} from 'react-native-vector-icons/Ionicons';

export default function AccountScreen(){
    return (
        <View style={styles.rootContainer}>
{/* Account */}
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                <View>
                    <Text>Account</Text>
                    <Text>Welcome John!</Text>
                </View>
                <View>
                    <Image style={{height:40, width:40}} source={require('../../assets/usericon.png')}/>
                </View>
            </View>

        <View style={{padding:20}}>
{/* Profile */}

            <View style={{padding:10}}>
                <Text>Profile</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Personal Info</Text>
                    {/* <Icon />        */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Cards & Payments</Text>
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Transaction History</Text>
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Privacy & Data</Text>
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Account ID</Text>
                    {/* <Icon /> */}
                </View>
            </View>
           
{/* Security */}
           
            <View style={{padding:10}}>
                <Text>Security</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>2-factor authentication</Text>
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Face ID</Text>
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Passcode Lock</Text>
                    {/* <Icon /> */}
                </View>
            </View>

{/* Notification Preferences */}

            <View style={{padding:10}}>
                <Text>Notification Preferences</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Text></Text> */}
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Text></Text> */}
                    {/* <Icon /> */}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Text></Text> */}
                    {/* <Icon /> */}
                </View>
            </View>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center',
        backgroundColor:'#F6F2ED'
    },
});