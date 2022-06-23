import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
} from 'react-native';

import api from '../../services/api';
import Repositorios from '../RepositoriosList';
import Loader from '../Helpers/ModalLoading';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import { connect } from 'react-redux';
import { addRepos } from '../../actions/index';
import { isLoading } from '../../actions/index';
import { initalState } from '../../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.pesquisarUsuario = this.pesquisarUsuario.bind(this);
  }

  async pesquisarUsuario(usuario) {
    if (usuario.nativeEvent.text.length == 0) {
      alert('Por favor, digite um usuário para pesquisa');
      return;
    }
    try {
      this.props.dispatch(isLoading(true));
      var response = await api.get(`users/${usuario.nativeEvent.text}/repos`);
      setTimeout(() => {
        this.props.dispatch(addRepos(response.data));
        this.textInput.clear();
      }, 1800);
    } catch (error) {
      setTimeout(() => {
        this.props.dispatch(initalState());
        this.textInput.clear();
        if(error.response.status == 404)
        alert('Não foi possível encontrar o usuário digitado.')
        else
        alert(`Erro interno ${error}`)
      }, 1800);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <TextInput
            style={{
              width: '80%',
              borderWidth: 1,
              borderColor: '#000',
              alignSelf: 'flex-start',
              marginLeft: 8,
            }}
            placeholder="Digite o nome do usuário"
            ref={(input) => {
              this.textInput = input;
            }}
            fontWeight="bold"
            placeholderTextColor="#000"
            onEndEditing={(usuario) => this.pesquisarUsuario(usuario)}
          />
          <View style={styles.infosUsuario}>
            <Image
              style={{
                width: '20%',
                height: '60%',
                padding: 10,
                borderRadius: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={{ uri: this.props.repositories.data.ownerAvatarUrl }}
            />
            <Text
              style={{
                padding: 10,
                fontSize: responsiveFontSize(1.8),
                fontWeight: 'bold',
                color: '#000',
              }}
            >
              {this.props.repositories.data.txtQtdRepositorio}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(3),
              alignSelf: 'flex-start',
              paddingLeft: 10,
              color: '#000',
            }}
          >
            {this.props.repositories.data.txtRepositorioDe}
          </Text>
          <FlatList
            style={{ width: '100%' }}
            data={this.props.repositories.data.repositorios}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Repositorios data={item} />}
          />
        </View>
        <View style={styles.loading}>
          <Loader
            loading={this.props.repositories.data.isLoading}
            message="Procurando..."
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
  infosUsuario: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '25%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const repositories = {
    data: state.repositories,
  };
  return { repositories };
};

export default connect(mapStateToProps)(Home);
