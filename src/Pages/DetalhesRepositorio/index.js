import React,{ Component } from "react";
import {View, Text,StyleSheet,Image,FlatList,TextInput,ActivityIndicator} from 'react-native';

import api from '../../services/api'
import Loader from '../Helpers/ModalLoading'
import IssuesList from '../IssuesList'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions"


export default class IssuesDetalhes extends Component{
    constructor(props){
        super(props)
        this.state = {
          repositoryName:null,
          repositoryDescription:null,
          issuesList:[],
          isLoading:true,
          ownerLogin:null,
          ownerAvatarUrl:null,
          language:null
        }
      }

      async componentDidMount(){
        var repositoryData = this.props.route.params.data
        try {
            if(repositoryData.open_issues == 0){
alert('Não há issues abertas neste repositório!')
    this.setState({
        isLoading:false,
        repositoryName:repositoryData.name,
        repositoryDescription:repositoryData.description,
        ownerLogin:repositoryData.owner.login,
        ownerAvatarUrl:repositoryData.owner.avatar_url,
        language:`Desenvolvido com : ${repositoryData.language || 'Não definido'}`,
    })
            }else{

            }
            const response = await api.get(`repos/${repositoryData.owner.login}/${repositoryData.name}/issues`)
            let responseObject = response.data
            setTimeout(() => {
                this.setState({
                    isLoading:false,
                    repositoryName:repositoryData.name,
                    repositoryDescription:repositoryData.description,
                    ownerLogin:repositoryData.owner.login,
                    ownerAvatarUrl:repositoryData.owner.avatar_url,
                    language:`Desenvolvido com : ${repositoryData.language || 'Não definido'}`,
                    issuesList:responseObject
                })
            },1900)
        } catch (error) {
            alert(error)
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{flexDirection:'row',height:'40%'}}>
                    <Image style={{width:'15%', height:'80%',margin:10,borderRadius:responsiveWidth(30)}} 
                resizeMode="contain"
                source={{uri:this.state.ownerAvatarUrl}}
                />
                <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveFontSize(1.5),paddingTop:30,width:'55%'}}>
                    {this.state.ownerLogin}
                    </Text>
                    </View>
                <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveFontSize(3),paddingLeft:8,width:'100%'}}>
                    {this.state.repositoryName}
                    </Text>
                    <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveFontSize(1.5),paddingLeft:10,width:'55%',paddingTop:5}}>
                    {this.state.language}
                    </Text>
                <Text style={{fontSize:responsiveFontSize(1.5),paddingLeft:10,paddingTop:5,color:'#3a3b3c'}}>{this.state.repositoryDescription}</Text>
                </View>
                <Loader loading={this.state.isLoading} message='Carregando...'/>
                <FlatList style={{width:'100%',paddingLeft:4.5}}
            data={this.state.issuesList}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <IssuesList data={item}/>}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    card:{
        shadowColor:'#000',
        backgroundColor:'#fff',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:5,
        borderRadius:5,
        elevation:3,
        height:responsiveHeight(28),
        width:'97%',
        justifyContent:'flex-start',
        margin:5,
      }
  })