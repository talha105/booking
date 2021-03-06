import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme,DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { connect} from 'react-redux';
import Login from "./screens/auth/login";
import signUp from './screens/auth/signUp';
import forgetPassword from './screens/auth/forgetPassword';
import * as actions from "./store/action";
import BookIcon from "react-native-vector-icons/MaterialIcons"
import Booking from './screens/booking/booking';
import Tickets from './screens/tickets/tickets';
import Notification from './screens/notification/notification';
import Complain from './screens/complain/complain';
import Profile from './screens/profile/profile';
import TicketIcon from "react-native-vector-icons/Fontisto";
import ComplaintIcon from "react-native-vector-icons/Feather";
import NotiIcon from "react-native-vector-icons/AntDesign";
import ProfileIcon from "react-native-vector-icons/FontAwesome";
import TicketDetail from './screens/booking/ticketDetail';
import sendComplaint from './screens/complain/sendComplaint';
import TicketViewDetail from './screens/tickets/ticketViewDetail';


const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    thm:'#77D8F6',
    background:'white',
    text:'#000000'
  }
};

function AuthRoutes(){
  return(
    <Stack.Navigator 
    initialRouteName="login"
    screenOptions={{
      headerTintColor: 'grey',
    }}
    >
      <Stack.Screen 
      options={{headerShown:false}}
      name="login" 
      component={Login}
      />
      <Stack.Screen 
      options={{headerShown:false}}
      name="signUp" 
      component={signUp}
      />
      <Stack.Screen 
      options={{headerShown:false}}
      name="forgetPassword" 
      component={forgetPassword}
      />
    </Stack.Navigator>
  )
}

function BookingRoutes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'grey',
      headerTitleStyle:{
        color:'grey'
      },
      headerStyle:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }
    }}
    >
      <Stack.Screen
      name="booking"
      options={{title:"Booking"}}
      component={Booking}
      />
      <Stack.Screen
      name="ticketDetails"
      options={{title:"Ticket"}}
      component={TicketDetail}
      />
    </Stack.Navigator>
  )
}

function TicketsRoutes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'grey',
      headerTitleStyle:{
        color:'grey'
      },
      headerStyle:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }
    }}
    >
      <Stack.Screen
      name="Tickets"
      options={{title:"Tickets"}}
      component={Tickets}
      />
      <Stack.Screen
      name="ticketViewDetail"
      options={{title:"Tickets Detail"}}
      component={TicketViewDetail}
      />
    </Stack.Navigator>
  )
}
function ComplainRoutes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'grey',
      headerTitleStyle:{
        color:'grey'
      },
      headerStyle:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }
    }}
    >
      <Stack.Screen
      name="complain"
      options={{title:"Complains"}}
      component={Complain}
      />
      <Stack.Screen
      name="createComplain"
      options={{title:"Create Complain"}}
      component={sendComplaint}
      />
    </Stack.Navigator>
  )
}
function ProfileRoutes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'grey',
      headerTitleStyle:{
        color:'grey'
      },
      headerStyle:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }
    }}
    >
      <Stack.Screen
      name="profile"
      options={{title:"Profile"}}
      component={Profile}
      />
    </Stack.Navigator>
  )
}
function NotificationRoutes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'grey',
      headerTitleStyle:{
        color:'grey'
      },
      headerStyle:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      }
    }}
    >
      <Stack.Screen
      name="notification"
      options={{title:"Notifications"}}
      component={Notification}
      />
    </Stack.Navigator>
  )
}

function tabs(){
  return (
      <Tab.Navigator
      tabBarOptions={{
        labelStyle:{
          marginBottom:2
        },
        activeTintColor:'#77D8F6',
        style:{
          height:55
        }
      }}
      >

      <Tab.Screen 
      options={{
        title:"Booking",
        tabBarIcon:({color})=><BookIcon name="book-online" size={20} color={color}/>
      }}
      name="booking" 
      component={BookingRoutes} />
      <Tab.Screen 
      options={{
        title:"Tickets",
        tabBarIcon:({color})=><TicketIcon name="ticket" size={20} color={color}/>
      }}
      name="tickets" 
      component={TicketsRoutes} />
      <Tab.Screen 
      options={{
        title:"Complains",
        tabBarIcon:({color})=><ComplaintIcon name="alert-circle" size={20} color={color}/>
      }}
      name="complain" 
      component={ComplainRoutes} />
       <Tab.Screen 
      options={{
        title:"Notification",
        tabBarIcon:({color})=><NotiIcon name="notification" size={20} color={color}/>
      }}
      name="notification" 
      component={NotificationRoutes} />
      <Tab.Screen 
      options={{
        title:"Profile",
        tabBarIcon:({color})=><ProfileIcon name="user" size={20} color={color}/>
      }}
      name="profile" 
      component={ProfileRoutes} />

      </Tab.Navigator>
  );
}



function Routes({user}){
  
    return(
      <NavigationContainer 
      theme={MyTheme}>
        {true?tabs():AuthRoutes()}
      </NavigationContainer>
    )
}

function mapStateToProps({user}){
  return {user}
}

export default connect(mapStateToProps,actions)(Routes);

