/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { render } from 'react-dom';


import { ApolloProvider } from '@apollo/react-hooks';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { StyleSheet, View, StatusBar,TextInput,Dimensions,ImageBackground,ScrollView,Text } from "react-native";
import {Icon,Button} from 'react-native-elements';
import Svg, { Path, Ellipse } from "react-native-svg";

import {Image,Input} from 'react-native-elements';
const { width, height } = Dimensions.get('window');




class App extends React.Component{
  render(){
    return(
      <ImageBackground source={{uri : 'https://firebasestorage.googleapis.com/v0/b/newproj-7a868.appspot.com/o/wallpaper.jpg?alt=media&token=7afab3f2-4aa8-48dc-8380-2f9fd67304c5'}} style={{width: '100%', height: '100%',justifyContent : 'center',alignItems : 'center'}}>
      <ScrollView>
      <View style={styles.container}>
             <StatusBar animated={true} hidden={false} />
             <View style={styles.rectStack}>
               <View style={styles.rect} />
               <Svg
                 viewBox="0 0 253.0717467147557 209"
                 style={styles.path}
               >
                 <Path
                   strokeWidth={0}
                   fill="rgba(255,255,255,1)"
                   stroke="rgba(230, 230, 230,1)"
                   d="M0.00 220.03 L1.00 26.03 C1.00 26.03 -1.00 -0.97 22.00 0.03 C45.00 1.03 244.00 199.03 244.00 199.08 C244.00 199.03 248.00 200.03 253.00 211.03 C258.00 222.03 0.00 220.03 0.00 220.03 Z"
                 />
               </Svg>

               <Svg
                 viewBox="0 0 253.0717467147557 220.16932966023876"
                 style={styles.path2}
               >

                 <Path
                   strokeWidth={0}
                   fill="rgba(255,255,255,1)"
                   stroke="rgba(230, 230, 230,1)"
                   d="M0.00 220.03 L1.00 26.03 C1.00 26.03 -1.00 -0.97 22.00 0.03 C45.00 1.03 244.00 199.03 244.00 199.03 C244.00 199.03 248.00 200.03 253.00 211.03 C258.00 222.03 0.00 220.03 0.00 220.03 Z"
                 />
               </Svg>
               <View style={styles.rect2} />
               <Text style = {{fontSize : 30,alignSelf : 'center',marginTop : 20}}>Logo</Text>
               <Input
               containerStyle = {{marginTop : 50,width : 300,alignSelf : 'center'}}
              placeholder='Email'
               rightIcon={
                  <Icon
                  name='email'
                   size={24}
                  color='grey'
                 />
                }
                />

                <Input
                containerStyle = {{marginTop : 5,width : 300,alignSelf : 'center'}}
                placeholder='Password'
                rightIcon={
                   <Icon
                   name='security'
                    size={24}
                   color='grey'
                  />
                 }
                 />

                 <Button buttonStyle = {{borderRadius : 30,height : 40,width : 160,backgroundColor : 'orange',marginTop : 120,marginLeft : 160}}
                 title = "Login"/>

               <Svg viewBox="0 0 95.88 96.00" style={styles.ellipse}>
                 <Ellipse
                   strokeWidth={0}
                   fill="rgba(219,14,14,1)"
                   stroke="rgba(230, 230, 230,1)"
                   cx={48}
                   cy={48}
                   rx={48}
                   ry={48}
                 />
               </Svg>
               <Svg viewBox="0 0 95.88 96.00" style={styles.ellipse2}>
                 <Ellipse
                   strokeWidth={0}
                   fill="rgba(0,146,255,1)"
                   stroke="rgba(230, 230, 230,1)"
                   cx={48}
                   cy={48}
                   rx={48}
                   ry={48}
                 />
               </Svg>
               <Svg viewBox="0 0 95.88 96.00" style={styles.ellipse3}>
                 <Ellipse
                   strokeWidth={0}
                   fill="rgba(244,6,243,1)"
                   stroke="rgba(230, 230, 230,1)"
                   cx={48}
                   cy={48}
                   rx={48}
                   ry={48}
                 />
               </Svg>
               <MaterialCommunityIconsIcon name="google-glass" style={styles.icon} />
               <MaterialCommunityIconsIcon name="instagram" style={styles.icon2} />
               <MaterialCommunityIconsIcon name="facebook" style={styles.icon3} />
               <Svg viewBox="0 0 39.85 40.00" style={styles.ellipse4}>
                 <Ellipse
                   strokeWidth={0}
                   fill="rgba(120,236,81,1)"
                   stroke="rgba(230, 230, 230,1)"
                   cx={20}
                   cy={20}
                   rx={20}
                   ry={20}
                 />
               </Svg>
               <Svg viewBox="0 0 39.85 40.00" style={styles.ellipse5}>
                 <Ellipse
                   strokeWidth={0}
                   fill="rgba(120,236,81,1)"
                   stroke="rgba(230, 230, 230,1)"
                   cx={20}
                   cy={20}
                   rx={20}
                   ry={20}
                 />
               </Svg>
               <MaterialCommunityIconsIcon name="arrow-up" style={styles.icon4} />
               <MaterialCommunityIconsIcon name="arrow-down" style={styles.icon5} />
               <Text style = {{fontSize : 30,marginLeft : 50,marginTop : 280}}>Logo</Text>
               <Input
               containerStyle = {{marginTop : 80,width : 300,alignSelf : 'center'}}
              placeholder='Name'
               rightIcon={
                  <Icon
                  name='person'
                   size={24}
                  color='grey'
                 />
                }
                />

                <Input
                containerStyle = {{marginTop : 5,width : 300,alignSelf : 'center'}}
                placeholder='Email'
                rightIcon={
                   <Icon
                   name='email'
                    size={24}
                   color='grey'
                  />
                 }
                 />

                 <Input
                 containerStyle = {{marginTop : 5,width : 300,alignSelf : 'center'}}
                 placeholder='Password'
                 rightIcon={
                    <Icon
                    name='security'
                     size={24}
                    color='grey'
                   />
                  }
                  />

                  <Input
                  containerStyle = {{marginTop : 5,width : 300,alignSelf : 'center'}}
                  placeholder='confirm password'
                  rightIcon={
                     <Icon
                     name='security'
                      size={24}
                     color='grey'
                    />
                   }
                   />

                 <Button buttonStyle = {{borderRadius : 30,height : 40,width : 160,backgroundColor : 'orange',marginTop : 35,marginLeft : 160}}
                 title = "Sign Up"/>

             </View>

           </View>
          <View style = {{height : 170}}></View>
        </ScrollView>
    </ImageBackground>
      );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
  justifyContent : 'center',
   borderWidth: 0
 },
 rect: {
   top: 759,
   left: 0,
   width: 340,
   height: 340,
   backgroundColor: "rgba(255,255,255,1)",
   position: "absolute",
   borderRadius: 41
 },
 path: {
   top: 496,
   left: 0,
   width: 339,
   height: 297,
   position: "absolute"
 },
 path2: {
   top: 218,
   left: 2,
   width: 339,
   height: 297,
   position: "absolute",
   transform: [
     {
       rotate: "180.00deg"
     }
   ]
 },
 rect2: {
   top: 0,
   left: 1,
   width: 340,
   height: 258,
   backgroundColor: "rgba(255,255,255,1)",
   position: "absolute",
   transform: [
     {
       rotate: "180.00deg"
     }
   ],
   borderRadius: 41
 },
 ellipse: {
   top: 367,
   left: 21,
   width: 80,
   height: 96,
   position: "absolute"
 },
 ellipse2: {
   top: 453,
   left: 117,
   width: 80,
   height: 96,
   position: "absolute"
 },
 ellipse3: {
   top: 549,
   left: 218,
   width: 80,
   height: 96,
   position: "absolute"
 },
 icon: {
   top: 397,
   position: "absolute",
   color: "rgba(255,255,255,1)",
   fontSize: 36,
   left: 45
 },
 icon2: {
   top: 577,
   left: 240,
   position: "absolute",
   color: "rgba(255,255,255,1)",
   fontSize: 36
 },
 icon3: {
   top: 481,
   left: 139,
   position: "absolute",
   color: "rgba(255,255,255,1)",
   fontSize: 36
 },
 ellipse4: {
   top: 466,
   left: 293,
   width: 40,
   height: 40,
   position: "absolute"
 },
 ellipse5: {
   top: 510,
   left: 8,
   width: 40,
   height: 40,
   position: "absolute"
 },
 icon4: {
   top: 468,
   left: 295,
   position: "absolute",
   color: "rgba(255,255,255,1)",
   fontSize: 36
 },
 icon5: {
   top: 511,
   left: 9,
   position: "absolute",
   color: "rgba(255,255,255,1)",
   fontSize: 36
 },
 rectStack: {
   width: 341,
   height: 1017,
   marginTop: 51,
   marginLeft: 8
 }
});

export default App;
