/*Custom Button*/
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f50',
    color: '#ffffff',
    padding: 10,
    borderRadius: 25,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;
