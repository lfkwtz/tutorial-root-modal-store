import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import RootModal from './src/modals/RootModal';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
        <RootModal />
      </Provider>
    );
  }
}
