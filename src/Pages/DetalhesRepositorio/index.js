import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import api from '../../services/api';
import Loader from '../Helpers/ModalLoading';
import IssuesList from '../IssuesList';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import { connect } from 'react-redux';
import { isLoading } from '../../actions/index';
import { addIssues } from '../../actions/index';

class IssuesDetalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryName: null,
      repositoryDescription: null,
      issuesList: [],
      isLoading: true,
      ownerLogin: null,
      ownerAvatarUrl: null,
      language: null,
    };
  }

  async componentDidMount() {
    try {
      this.props.dispatch(addIssues([]));
      this.props.dispatch(isLoading(true));
      const response = await api.get(
        `repos/${this.props.repositories.data.ownerLogin}/${this.props.repositories.data.reposName}/issues`
      );
      setTimeout(() => {
        this.props.dispatch(addIssues(response.data));
        this.props.dispatch(isLoading(false));
      }, 1900);
    } catch (error) {
      this.props.dispatch(isLoading(false));
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', height: '40%' }}>
            <Image
              style={{
                width: '15%',
                height: '80%',
                margin: 10,
                borderRadius: responsiveWidth(30),
              }}
              resizeMode="contain"
              source={{ uri: this.props.repositories.data.ownerAvatarUrl }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                paddingTop: 30,
                width: '55%',
              }}
            >
              {this.props.repositories.data.ownerLogin}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: responsiveFontSize(3),
              paddingLeft: 8,
              width: '100%',
            }}
          >
            {this.props.repositories.data.reposName}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: responsiveFontSize(1.5),
              paddingLeft: 10,
              width: '55%',
              paddingTop: 5,
            }}
          >
            {this.props.repositories.data.language}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              paddingLeft: 10,
              paddingTop: 5,
              color: '#3a3b3c',
            }}
          >
            {this.props.repositories.data.description}
          </Text>
        </View>
        <Loader
          loading={this.props.repositories.data.isLoading}
          message="Carregando..."
        />
        <FlatList
          style={{ width: '100%', paddingLeft: 4.5 }}
          data={this.props.issuesList.dataIssues.lista}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <IssuesList data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    height: responsiveHeight(28),
    width: '97%',
    justifyContent: 'flex-start',
    margin: 5,
  },
});

const mapStateToProps = (state) => {
  const repositories = {
    data: state.repositories,
  };
  const issuesList = {
    dataIssues: state.issuesList,
  };
  return { repositories, issuesList };
};

export default connect(mapStateToProps)(IssuesDetalhes);
