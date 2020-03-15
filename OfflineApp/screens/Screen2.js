import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Screen2 </Text>
        <Button
          title="Goto Screen1"
          onPress={() => {
            this.props.navigation.navigate('Screen1');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Screen2;
