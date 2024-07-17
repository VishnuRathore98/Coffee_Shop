import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from "expo-app-loading";
import { Dropdown } from "react-native-element-dropdown";

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
//   ];

export default function OrderScreen(){
    let [fonstLoaded] = useFonts({Poppins_500Medium, Poppins_600SemiBold});
    if (!fonstLoaded){
        return <AppLoading />;
    }
    else{
    return (
        <View style={styles.rootContainer}>
            <View style={{backgroundColor:'#4E8D7C', height:153,}}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                    <Image style={{width:100, height:120}} source={require('../../assets/coldcoffee.png')}/>
                    <Text style={{fontSize:16, color:'white', fontFamily:'Poppins_500Medium'}}>Pumpkin Spice Lattee</Text>
                </View>
            </View>
            <View style={{flex:1, margin:12, borderWidth:1}}>
                <View style={{borderWidth:1, padding:12}}>
                    <Text style={{fontSize:16, fontFamily:'Poppins_600SemiBold'}}>What's included</Text>
                </View>
                <View>
                    <View style={{borderWidth:1, padding:20}}>
                        <Text>Cup Size</Text>
                        {/* Throwing Error: Maximum update depth exceeded.  */}
                        {/* <Dropdown  style={{borderWidth:1,}} /> */}
                    </View>
                    <View style={{borderWidth:1, padding:20}}>
                        <Text>Add-Ins</Text>
                        {/* <Dropdown  style={{borderWidth:1,}} /> */}
                    </View>
                    <View style={{borderWidth:1, padding:20}}>
                        <Text>Sweetner</Text>
                        {/* <Dropdown  style={{borderWidth:1,}} /> */}
                    </View>
                    <View style={{borderWidth:1, padding:20}}>
                        <Text>Flavor</Text>
                        {/* <Dropdown  style={{borderWidth:1,}} /> */}
                    </View>
                </View>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center',
        marginTop:40,
    },
});