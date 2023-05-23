import {View, Text, Button} from 'react-native';

const Screen02 = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>this is Screen02</Text>
      <Button
        title="go to Screen01"
        onPress={() => {
          props.navigation.navigate('Screen01');
        }}
      />
    </View>
  );
};
export default Screen02;
