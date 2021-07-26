import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View ,Text,TouchableOpacity,Image, StyleSheet,ImageBackground,ScrollView, FlatList} from 'react-native';
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
import GoIcon from "react-native-vector-icons/Ionicons"
import SendIcon from "react-native-vector-icons/Entypo"
import BigModel from '../../components/bigModel';

function Complain({navigation}){
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

    function renderComplain({item}){
        return (
            <TouchableOpacity 
            onPress={()=>{
                setModel(true)
            }}
            style={{...styles.itemCon}}>
                <View style={{width:'2%',backgroundColor:colors.thm,height:responsiveHeight(13),borderTopLeftRadius:responsiveFontSize(0.5),borderBottomLeftRadius:responsiveFontSize(0.5)}}/>
                <View style={{width:"78%",padding:responsiveFontSize(1)}}>
                    <Text>Here is a title</Text>
                    <Text style={{marginTop:responsiveFontSize(0.5),fontSize:responsiveFontSize(1.5),color:'grey',textAlign:'justify'}}>
                        In publishing and graphic design, commonly used to demonstrate the visual form of a document...
                    </Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
                    <GoIcon
                    size={responsiveFontSize(4)}
                    name="arrow-forward-circle-outline"
                    color="#c8c7c7"
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const getValue=(k,v)=>setFields({...fields,[k]:v})

    if(loading){
        return <Loader/>
    }else{
        return(
            <View
            style={{width:'100%',flex:1}}>
                <BigModel
                closeModle={()=>setModel(false)}
                title="Here is a title"
                des="In publishing and graphic design, commonly used to demonstrate the visual form of a document..."
                visible={model}
                />
               {true?(
                        <FlatList
                        data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,]}
                        renderItem={renderComplain}
                        style={{flex:1}}
                        contentContainerStyle={{paddingBottom:responsiveFontSize(4),width:'100%',marginTop:responsiveFontSize(2)}}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item,i)=>i.toString()}
                        />
                    ):(
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:responsiveFontSize(3),color:'grey',fontFamily:'Montserrat-Bold'}}>Not Found</Text>
                        </View>
                    )}
                    <TouchableOpacity 
                    onPress={()=>navigation.push("createComplain")}
                    style={{...styles.btn,backgroundColor:colors.thm}}>
                        <SendIcon
                        name="add-to-list"
                        size={responsiveFontSize(3)}
                        color="white"
                        />
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    itemCon:{
        backgroundColor:'white',
        height:responsiveHeight(13),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginVertical:responsiveFontSize(0.75),
        borderRadius:responsiveFontSize(0.5),
        width:'95%',
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:'auto'
    },
    btn:{
        position:'absolute',
        width:responsiveFontSize(8),
        height:responsiveFontSize(8),
        borderRadius:responsiveFontSize(8)/2,
        justifyContent:'center',
        alignItems:'center',
        bottom:responsiveFontSize(2),
        right:responsiveFontSize(2)}
})

function mapStateToProps(){
    return {
        user:5
    }
}

export default connect(mapStateToProps,actions)(Complain);
