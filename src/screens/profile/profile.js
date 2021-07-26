import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView, FlatList, TextInput} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import {useTheme} from "@react-navigation/native"
import * as actions from "../../store/action"
import {connect} from "react-redux";
import Loader from '../../components/pageLoader';
import MailIcon from "react-native-vector-icons/Fontisto";
import UserIcon from "react-native-vector-icons/AntDesign";
import LocationIcon from "react-native-vector-icons/Entypo";
import Btn from '../../components/btn';

function Profile({navigation}){
    const {colors}=useTheme()
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    const [submit,setSubmit]=useState(false)
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'black',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>
          });
    },[])

    useEffect(()=>{
            setLoading(false)
    },[])



    const getValue=(k,v)=>setFields({...fields,[k]:v})

    if(loading){
        return <Loader/>
    }else{
        return(
            <View
            style={{width:'100%',flex:1,backgroundColor:'#f6f6f6'}}>
               <ScrollView>
               <View style={{alignItems:'center'}}>
                    <Image
                    style={{width:'100%',height:responsiveHeight(20)}}
                    source={require('../../../assets/background.png')}
                    />
                    
                        <View style={{position:'absolute',top:responsiveHeight(13)}}>
                            <Image
                            source={require('../../../assets/profile.jpg')}
                            style={{width:responsiveFontSize(11),height:responsiveFontSize(11),borderRadius:responsiveFontSize(11)/2}}
                            />
                        </View>
                    </View>
                    <View style={{marginTop:responsiveHeight(5),width:'90%',marginRight:'auto',marginLeft:'auto'}}>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1),paddingLeft:responsiveFontSize(0.25)}}>Name</Text>
                            <View style={{...styles.box}}>
                                <TextInput
                                placeholder="name"
                                style={{paddingVertical:5,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1),paddingLeft:responsiveFontSize(0.25)}}>Email</Text>
                            <View style={{...styles.box}}>
                                <TextInput
                                placeholder="email"
                                style={{paddingVertical:5,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1),paddingLeft:responsiveFontSize(0.25)}}>Address</Text>
                            <View style={{...styles.box}}>
                                <TextInput
                                placeholder="Address"
                                numberOfLines={4}
                                textAlignVertical="top"
                                style={{paddingVertical:5,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1),paddingLeft:responsiveFontSize(0.25)}}>Phone No</Text>
                            <View style={{...styles.box}}>
                                <TextInput
                                placeholder="Phone No"
                                keyboardType="numeric"
                                style={{paddingVertical:5,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{marginVertical:responsiveFontSize(2)}}>
                            <Btn
                            text="update"
                            />
                        </View>
                    </View>
               </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    box:{
        backgroundColor:'white',
        borderRadius:responsiveFontSize(0.5),
    }

})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(Profile);
