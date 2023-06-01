import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Home = ({logout}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.image}>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>this is Home screen !!</Text>
        <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
          모바일 프로그래밍 개인 프로젝트{'\n'} 2018243055 권유익
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '110%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
