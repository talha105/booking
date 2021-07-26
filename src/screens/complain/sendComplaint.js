import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import LogoutIcon from "react-native-vector-icons/AntDesign";
  import {useTheme} from "@react-navigation/native"
import { TextInput } from 'react-native-gesture-handler';
import Btn from "../../components/btn";
import * as actions from "../../store/action"
import {connect} from "react-redux";
import SuccesModel from "../../components/succesModel"
import ThemeIcon from 'react-native-vector-icons/Feather';
import Loader from '../../components/pageLoader';

function SendComplain({navigation}){
    const {colors}=useTheme()
    const [model,setModel]=useState(false)
    const [submit,setSubmit]=useState(false)
    const [loader,setLoader]=useState(false)
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'black',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>,
            headerRight:props=>(
                <View style={{marginRight:responsiveFontSize(2)}}>
                    <TouchableOpacity>
                        <Image
                        style={{width:responsiveFontSize(3.5),height:responsiveFontSize(3.5),borderRadius:responsiveFontSize(3.5)/2}}
                        source={require("../../../assets/profile.jpg")}
                        />
                    </TouchableOpacity>
                </View>
            )
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
                <SuccesModel
                closeModle={()=>setModel(false)}
                title="Update Successfully"
                visible={model}
                />
                <ScrollView>
                    <View style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                        <View style={{marginTop:responsiveFontSize(2)}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1)}}>Title</Text>
                            <View style={{backgroundColor:'white',borderRadius:responsiveFontSize(0.5)}}>
                                <TextInput
                                 placeholder="enter title here"
                                 style={{marginVertical:responsiveFontSize(0.5),paddingVertical:0,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:responsiveFontSize(2)}}>
                            <Text style={{color:'grey',marginVertical:responsiveFontSize(1)}}>Describtion</Text>
                            <View style={{backgroundColor:'white',borderRadius:responsiveFontSize(1)}}>
                                <TextInput
                                 placeholder="enter title here"
                                 numberOfLines={responsiveHeight(2.5)}
                                 textAlignVertical="top"
                                 style={{marginVertical:responsiveFontSize(0.5),paddingVertical:0,paddingLeft:responsiveFontSize(1)}}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:responsiveFontSize(2)}}>
                            <Btn
                            text="Send"
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    imgCon:{
    }
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(SendComplain);
