import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import ErrorIcon from "react-native-vector-icons/MaterialIcons"
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {useTheme} from "@react-navigation/native"

function InputField ({placeHolder,placeHolderColor,icon,getValue,password,keyboardType,defaultValue,color,error}){
    const {colors}=useTheme();
    return (
        <View style={styles.con}>
            <View style={{position:'absolute',left:responsiveFontSize(1.5)}}>
                {icon()}
            </View>
            <TextInput
            defaultValue={defaultValue?defaultValue:null}
            value={defaultValue?defaultValue:null}
            keyboardType={keyboardType==="number"?'number-pad':'default'}
            secureTextEntry={password?true:false}
            onChangeText={(v)=>getValue(v)}
            placeholder={placeHolder}
            placeholderTextColor={placeHolderColor?placeHolderColor:"grey"}
            style={{...styles.input,color:color}}
            />
            {error?(
                <View style={{position:'absolute',right:responsiveFontSize(1.5)}}>
                    <ErrorIcon
                    name="error"
                    color="#c62f1c"
                    size={17}
                    />
                </View>
            ):null}
        </View>

      );
}

const styles=StyleSheet.create({
input:{
    flex: 1,
    paddingRight: responsiveWidth(11),
    paddingLeft: responsiveWidth(11),
    paddingVertical:0,
    marginVertical:0

},
con: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:responsiveFontSize(6),
    marginVertical:responsiveFontSize(0.7),
    borderRadius:responsiveFontSize(1),
    backgroundColor:'rgba(255,255,255,0.4)'
},
})

export default InputField