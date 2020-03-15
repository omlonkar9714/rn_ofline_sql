import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Screen1 </Text>
        <Button
          title="Goto Screen2"
          onPress={() => {
            this.props.navigation.navigate('Screen2');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default Screen1;
