import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  
  return (
    <View {...props} style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    backgroundColor:'#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
export default Card;
