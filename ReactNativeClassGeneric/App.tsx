import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseService from "./src/network/BaseService";
import { User } from "./src/models/User";
import { Product } from "./src/models/Product";

const App = () => {
  let userservice = new BaseService<User>('users');
  let productService = new BaseService<Product>('products');

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
