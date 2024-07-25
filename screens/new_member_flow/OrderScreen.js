import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function OrderScreen(){
    return (
        <ScrollView>
        <View style={styles.rootContainer}>
            {/* Drinks */}

<View style={styles.drinksContainer}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:20, fontFamily:"Poppins_600SemiBold"}}>Drinks</Text>
        <TouchableOpacity><Text style={{color:'#4E8D7C', fontSize:14,  fontFamily:"Poppins_600SemiBold"}}>See all</Text></TouchableOpacity>
    </View>
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/hotcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Coffees</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hottea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Teas</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/hotdrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Drinks</Text></TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/frappucino.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Frappucino</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/coldcoffee.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Cold Coffees</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/icedtea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Iced Teas</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5   }}><Image style={{width:110, height:120}} source={require('../../assets/colddrink.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Cold Drinks</Text></TouchableOpacity>
            
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
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/menu_card/hotbreakfast.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Hot Breakfast</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/bakery.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Bakery</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/treats.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Treats</Text></TouchableOpacity>
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
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/menu_card/wholebean.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Whole Bean</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/tea.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Tea</Text></TouchableOpacity>
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
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{ width:110, height:120}} source={require('../../assets/menu_card/personalizedcoldcup.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Cold Cup</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/personalizedtumblers.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Tumblers</Text></TouchableOpacity>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/personalizedmugs.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Personalized Mugs</Text></TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TouchableOpacity style={{ elevation:2, justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10, margin:5}}><Image style={{width:110, height:120}} source={require('../../assets/menu_card/other.png')}/><Text style={{fontSize:14,  fontFamily:"Poppins_500Medium"}}>Other</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#F6F2ED'
    },
    drinksContainer:{
        flex:1,
        margin:18,
    }
});