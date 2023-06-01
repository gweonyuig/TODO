import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Todolist from './screens/Todolist';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from './screens/firebase';

const Tab = createBottomTabNavigator();

function LoggedIn() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'HOME',
            tabBarIcon: () => (
              <Image
                source={require('./assets/home.png')}
                style={{width: 20, height: 20}}
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={logout}>
                <Text
                  style={{
                    marginRight: 20,
                    fontSize: 16,
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  로그아웃
                </Text>
              </TouchableOpacity>
            ),
            //headerShown: false,
          }}
        />
        <Tab.Screen
          name="Todolist"
          component={Todolist}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/todolist.png')}
                style={{width: 20, height: 20}}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Signup({setScreen}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const createAccount = async () => {
    //create account
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        setError("Passwords don't match");
      }
    } catch (e) {
      setError('there was a problem creating your account');
    }
  };
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.header}>Signup</Text>
        <TouchableOpacity onPress={() => setScreen('login')}>
          <Text style={styles.link}>Login to existing account</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" //이거안하면 @ 안뜸
          placeholder="Enter email address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry // ***모양으로 변환
          placeholder="Enter password"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirm password"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <Button
          title="Create Account"
          onPress={createAccount}
          disabled={!email || !password || !confirmPassword}
        />
      </View>
    </View>
  );
}

function Login({setScreen}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        setError('Your email or password was incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else {
        setError('There was a problem with your request');
      }
    }
  };

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.header}>Login</Text>

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity onPress={() => setScreen('signup')}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>

        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" //이거안하면 @ 안뜸
          placeholder="Enter email address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry // ***모양으로 변환
          placeholder="Enter password"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        <Button
          title="Login"
          onPress={loginUser}
          disabled={!email || !password}
        />
        {/*disabled-{true} 비활성화! */}
      </View>
    </View>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState(null);

  onAuthStateChanged(auth, user => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const getScreen = () => {
    if (loggedIn) return <LoggedIn />;
    if (screen === 'signup') return <Signup setScreen={setScreen} />;
    return <Login setScreen={setScreen} />;
  };

  return <View style={{flex: 1}}>{getScreen()}</View>;
};
export default App;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 240,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  error: {
    marginBottom: 20,
    color: 'red',
  },
  link: {
    color: 'blue',
    marginBottom: 20,
  },
});
