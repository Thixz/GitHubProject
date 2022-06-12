import React,{ Component } from "react";
import {View, Text,StyleSheet,TouchableOpacity,FlatList,TextInput,ActivityIndicator} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

  import {changeRepoPageToDetails} from './../../../actions'
  import { connect } from "react-redux";



  const RepositoriesList = (props) =>{
  const navigation = useNavigation()

  return(
    <TouchableOpacity style={{width:'97%',margin:4}}
    onPress={
      () => { props.dispatch(changeRepoPageToDetails(props.data)); navigation.navigate('Detalhes Repositorio'); }
     }>
        <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold',color:'#000',fontSize:responsiveFontSize(2),paddingLeft:5,width:responsiveWidth(40)}}>{props.data.name}</Text>
            <Text style={{fontStyle:'italic',color:'#000',fontSize:responsiveFontSize(1.4),paddingLeft:11,paddingTop:2,width:'50%'}}>{props.data.description}</Text>
            </View>
            <Text style={{fontSize:responsiveFontSize(1.6),paddingLeft:5,color:'#3a3b3c'}}>Open Issues: {props.data.open_issues.toString().toUpperCase()}</Text>
        </View>
    </TouchableOpacity>
)
} 


const styles = StyleSheet.create({
    card:{
      shadowColor:'#000',
      backgroundColor:'#fff',
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.8,
      shadowRadius:5,
      borderRadius:5,
      elevation:3,
      height:responsiveHeight(12),
      width:'100%',
      justifyContent:'center',
    }
  })


  const mapStateToProps = (state) => {
    const  repositories = { 
      data: state.repositories,
    }
    return { repositories }
  }
  
  export default connect(mapStateToProps)(RepositoriesList)
  