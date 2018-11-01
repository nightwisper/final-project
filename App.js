import React from "react";
import { createStackNavigator } from "react-navigation";

import Error from "./components/Error";

const RootStack = createStackNavigator({
  Error: Error
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
