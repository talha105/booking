import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView, FlatList} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import {useTheme} from "@react-navigation/native"
import * as actions from "../../store/action"
import {connect} from "react-redux";
import SuccesModel from "../../components/succesModel"
import Loader from '../../components/pageLoader';




function TicketDetail({navigation}){

    const {colors}=useTheme()
    const [model,setModel]=useState(false)
    const [submit,setSubmit]=useState(false)
    const [loader,setLoader]=useState(false)
    const [loading,setLoading]=useState(true)
    const [fields,setFields]=useState({
        
    })
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: props => <Text style={{textAlign:'center',color:'grey',fontSize:responsiveFontSize(2.5),textTransform:'uppercase',fontFamily:'Montserrat-Bold'}}>{props.children}</Text>,
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
            style={{width:'100%',flex:1}}>
                <SuccesModel
                closeModle={()=>setModel(false)}
                title="Update Successfully"
                visible={model}
                />
                <ScrollView style={{flex:1}}>
                    <View style={{backgroundColor:'green',margin:responsiveFontSize(1),padding:responsiveFontSize(1)}}>
                        <Text>Details</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(TicketDetail);
