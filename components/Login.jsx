import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Login = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("clicked me");
      }}
      style={{ marginTop: 20 }}
    >
      <Text style={{ color: "#cc0000" }}>Sign In</Text>
    </TouchableOpacity>
  );
};

export default Login;
