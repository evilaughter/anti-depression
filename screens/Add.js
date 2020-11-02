import React,{Component}from 'react';
import {
    View,
    Text,
    
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
 import {Input} from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';



export default class Add extends Component{

    render ()
    {return(
       <View>
        <Input placeholder='Express yourself here ' leftIcon={{type:'font-awesome' , name:'hand-holding-heart' }}/>  
        <Input placeholder='Type your name here' leftIcon={{type:'font-awesome' , name:'signature' }}/>  
        </View>
    )}
    
}