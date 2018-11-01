import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

export default class SearchBeer extends Component {
  render() {
    return (
      <View>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          containerStyle={styles.search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(require("./css"));
