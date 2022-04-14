import React from 'react';
import{View, Text, Linking, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import { FocusedStatusBar } from '../components';
import Color from '../constants/Color';


const screenHeight = Dimensions.get("window").height;
const BlogScreen = ()=>{

    return(
        <>
        <FocusedStatusBar/>
        <View style={styles.blog} >
            
            <TouchableOpacity style={styles.google}>
            <Text style={{
                fontSize: 25,
                color: '#f50000',
            }} 
            onPress={()=> Linking.openURL('http://google.com')}> Press to check Google!</Text>
            </TouchableOpacity>
            <View style={styles.trends}>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/UvnBi4b')}>Basic Electricity </Text>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/tvnBObo')}>Domestic Installation </Text>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/hvnBLJ7')}>Industrial Installtion </Text>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/HvnNeyF')}>Cable Jointing </Text>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/wvnNRab')}>Battery Charging </Text>
                <Text style={styles.links} onPress={()=>Linking.openURL('https://cutt.ly/nvnNLhF')}>Electrical Machines Winding </Text>
               
            </View>
        </View>
        </>
    );

}
const styles = StyleSheet.create({
    blog:{
        flex: 1,
        backgroundColor: Color.background,
        alignItems: 'center',
    },
    google:{
        width:'100%',
        alignItems: 'center',
        paddingTop:'5%',
    },
    trends:{
        marginVertical: screenHeight < 600 ? 10 : 20,
        alignItems:'center'
    },
    links:{
        fontSize: screenHeight < 600 ? 17: 20,
        marginTop: screenHeight < 600 ? 15 : 20,
        borderBottomColor:'#eee',
        borderBottomWidth: .2,
        color: 'white'
    }
});
export default BlogScreen;