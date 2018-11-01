import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBeer from "../SearchBeer";

export default class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: this.props.navigation.getParam("ERROR", "")
    };
  }

  static navigationOptions = {
    title: "Error",
    headerTitle: <SearchBeer />,
    headerStyle: {
      backgroundColor: "#2b2f33"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Oops! Something went wrong</Text>
        <Text>{this.state.err}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(require("./css"));
