import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AntDesign, MaterialCommunityIcons} from '../constants/Icons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import color from '../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import ShopDetails from '../screens/ShopDetails';
const Stack = createNativeStackNavigator();

const TabBar = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';
    switch (routeName) {
      case 'home':
        icon = 'home-lightning-bolt';
        break;
      case 'analysis':
        icon = 'google-analytics';
        break;
      case 'wallet':
        icon = 'wallet';
        break;
      case 'profile':
        icon = 'guy-fawkes-mask';
        break;
    }
    return (
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={routeName === selectedTab ? color.BLUE : 'gray'}
      />
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <Pressable
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
        }}
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="home"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => navigate('scan')}>
              <MaterialCommunityIcons
                name={'credit-card-scan'}
                size={20}
                color={color.WHITE}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="home"
          position="LEFT"
          component={() => <Home />}
        />
        <CurvedBottomBar.Screen
          name="analysis"
          position="LEFT"
          component={() => <Shop />}
        />
        <CurvedBottomBar.Screen
          name="scan"
          position="CENTER"
          component={() => <ShopDetails />}
        />
        <CurvedBottomBar.Screen
          name="wallet"
          component={() => <></>}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="profile"
          component={() => <></>}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const WrapperNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
    <Stack.Screen name="Main" component={TabBar} />
    <Stack.Screen name="Shop" component={Shop} />
    <Stack.Screen name="ShopDetails" component={ShopDetails} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <WrapperNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.BLUE,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
