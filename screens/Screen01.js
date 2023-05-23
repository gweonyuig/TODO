import {View, Button, Text} from 'react-native';

const Screen01 = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>this is Screen01</Text>
      <Button
        title="go to Screen02"
        onPress={() => {
          props.navigation.navigate('Screen02');
        }}
      />
    </View>
  );
};

export default Screen01;
