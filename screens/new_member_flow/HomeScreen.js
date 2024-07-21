import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import {useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular, Poppins_100Thin, Poppins_300Light} from '@expo-google-fonts/poppins'
import  AppLoading  from "expo-app-loading";

export default function HomeScreen(){
    let [fonstLoaded] = useFonts({Poppins_600SemiBold,  Poppins_500Medium, Poppins_400Regular, Poppins_100Thin, Poppins_300Light});
    if (!fonstLoaded) {
        return <AppLoading />
    }
    else{
    return (
        <ScrollView>
        <View style={styles.rootContainer}>
            <View style={styles.bannerContainer}>
                <View style={styles.greetingContainer}>
                    <View>
                    <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>Good morning!</Text>
                    <Text style={{fontSize:18, fontFamily:"Poppins_400Regular",}}>Let's get this Coffee <Icon name="cafe" size={20}/></Text>
                    </View>
                    <View>
                        <Image style={{ height:62, width:62}} source={require('../../assets/usericon.png')}/>
                    </View>
                </View>
                <View style={styles.offerContainer}>
                    <View style={{ elevation:4, backgroundColor:'#4E8D7C', height:70, padding:6, borderTopStartRadius:4,  borderTopEndRadius:4,}}>
                        <Text style={{ fontSize:10, color:'#F6F2ED', fontFamily:"Poppins_400Regular"}}>BONUS REWARDS</Text>
                        <Text style={{ fontSize:16, color:'#F6F2ED', fontFamily:"Poppins_600SemiBold"}}>Coffee Delivered to your house</Text>
                    </View>
                    <View style={{flex:1, elevation:4, backgroundColor:'#FFFFFF', padding:6, borderBottomEndRadius:4, borderBottomStartRadius:4}}>
                        <Text style={{ fontSize:12,  fontFamily:"Poppins_600SemiBold"}}>Order 2 bags of coffee and get bonus stars!</Text>
                        <Text style={{ fontSize:12, fontFamily:"Poppins_400Regular"}}>Order any of our coffee and get an additional 30 Stars! Now that’s how you get free coffee!</Text>
                    </View>
                </View>
            </View>

{/* Drinks */}

<View style={styles.drinksContainer}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>Drinks</Text>
        <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity>
    </View>
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/hotcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Coffees</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hottea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Teas</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hotdrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Drinks</Text></TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/frappucino.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Frappucino</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/coldcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Cold Coffees</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/icedtea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Iced Teas</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5   }}><Image style={{width:110, height:120}} source={require('../../assets/colddrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Cold Drinks</Text></TouchableOpacity>
            
        </View>
    </View>
</View>

{/* Food */}

<View style={styles.drinksContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>Food</Text>
                    <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/hotcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Breakfast</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hottea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Bakery</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hotdrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Treats</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

{/* At Home Coffee */}

<View style={styles.drinksContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>At Home Coffee</Text>
                    <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/hotcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Whole Bean</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hottea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Tea</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

{/* Merchandise */}

<View style={styles.drinksContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>Merchandise</Text>
                    <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/hotcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Cold Cup</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hottea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Tumblers</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hotdrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Mugs</Text></TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity style={{ elevation:4, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/frappucino.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Other</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
        </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#F6F2ED'
    },
    bannerContainer:{
        flex:1,
        margin:18,
        paddingVertical:18

    },
    greetingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    offerContainer:{
        height:194,
    },
    drinksContainer:{
        flex:1,
        margin:18,
    }
});