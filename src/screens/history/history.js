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

function History({navigation}){
    const {colors}=useTheme()
    const [model,setModel]=useState(false)
    const [submit,setSubmit]=useState(false)
    const [loader,setLoader]=useState(false)
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'grey',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>
            
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
            style={{width:'100%',flex:1}}>
                <SuccesModel
                closeModle={()=>setModel(false)}
                title="Update Successfully"
                visible={model}
                />
                <ScrollView>
                    <Text>History</Text>
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

export default connect(mapStateToProps,actions)(History);
