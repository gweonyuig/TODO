import {View, Text, Button} from 'react-native';

const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>this is Home screen !!</Text>
      <Button
        title="go to Screen01"
        onPress={() => {
          props.navigation.navigate('Screen01');
        }}
      />
      <Button
        title="go to Screen02"
        onPress={() => {
          props.navigation.navigate('Screen02');
        }}
      />
      <Button
        title="LOGOUT"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
      <Button
        title="TODOLIST"
        onPress={() => {
          props.navigation.navigate('Todolist');
        }}
      />
    </View>
  );
};
export default Home;
