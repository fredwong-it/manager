import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    // reducer, inital state, store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
