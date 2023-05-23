import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Screen01 from './screens/Screen01';
import Screen02 from './screens/Screen02';
import {Image} from 'react-native';
import Todolist from './screens/todolist';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Todolist" component={Todolist} />
    </Stack.Navigator>
  );
}

function Screen01Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen01" component={Screen01} />
    </Stack.Navigator>
  );
}

function Screen02Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen02" component={Screen02} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/home.png')}
              style={{width: 20, height: 20}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Screen01Stack"
        component={Screen01Stack}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/screen01.png')}
              style={{width: 20, height: 20}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Screen02Stack"
        component={Screen02Stack}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./assets/screen02.png')}
              style={{width: 20, height: 20}}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: 'skyblue',
          width: 200,
        }}
        drawerContentOptions={{
          activeTintColor: 'red',
          activeBackgroundColor: 'blue',
        }}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: () => (
              <Image
                source={require('./assets/home.png')}
                style={{width: 20, height: 20}}
              />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Screen01"
          component={Screen01Stack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('./assets/screen01.png')}
                style={{width: 20, height: 20}}
              />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Screen02"
          component={Screen02Stack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('./assets/screen02.png')}
                style={{width: 20, height: 20}}
              />
            ),
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
