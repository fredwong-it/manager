import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBL0rT1-7G0JM6C2zQdCrkUDMo7DFvVZ8',
      authDomain: 'anager-c3361.firebaseapp.com',
      databaseURL: 'https://manager-c3361.firebaseio.com',
      projectId: 'manager-c3361',
      storageBucket: '',
      messagingSenderId: '346056710361'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
