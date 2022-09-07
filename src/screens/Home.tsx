import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import colors from '../constants/colors';
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Fontisto,
  EvilIcons,
} from '../constants/Icons';
import {ShowIndicator} from '../Components/Animations';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import sagaAction from '../saga/saga.action';
const {height, width} = Dimensions.get('window');
const Home = () => {
  const accountName = useSelector<any>(state => state.auth.accountName);
  const accountPalance = useSelector<any>(state => state.auth.accountPalance);

  let shopData: any = useSelector<any>(state => state.auth.shopData);
  let dispatch = useDispatch();
  useEffect(() => {
    //* get data from BE
    dispatch({type: sagaAction.GET_DATA});
  }, []);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [advertisement, setAdvertisement] = useState([
    require('../assets/ads.jpg'),
    require('../assets/ads.jpg'),
    require('../assets/ads.jpg'),
    require('../assets/ads.jpg'),
  ]);
  let navigation = useNavigation();
  const [choices, setChoices] = useState([
    {
      name: 'shop online',
      img: require('../assets/mob.png'),
      screenName: 'Shop',
    },
    {
      name: 'pay in store',
      img: require('../assets/bag.webp'),
      screenName: '',
    },
    {
      name: 'your Cards',
      img: require('../assets/credit.png'),
      screenName: '',
    },
    {
      name: 'loyality program',
      img: require('../assets/prize.jpg'),
      screenName: '',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, color: colors.WHITE}}>
          {`Welcome ${accountName} 👋`}
        </Text>
        <View style={styles.iconView}>
          <Ionicons name="notifications" size={20} color={colors.WHITE} />
          <FontAwesome5
            name="shopping-bag"
            size={18}
            color={colors.WHITE}
            style={{marginLeft: 20}}
          />
        </View>
      </View>
      <Text style={styles.txt1}>Your Account balance is</Text>
      <View style={styles.row}>
        <Text style={styles.txt2}> {`${accountPalance}  EGP `}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={25}
          color={colors.WHITE}
          style={{alignSelf: 'flex-end'}}
        />
      </View>

      <View style={styles.rowBtn}>
        <Pressable style={styles.pressable}>
          <Ionicons name="add-outline" size={20} color={colors.BLUE} />

          <Text style={styles.txt3}>Add Money</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Fontisto name="arrow-swap" size={20} color={colors.BLUE} />
          <Text style={styles.txt3}>Transfer</Text>
        </Pressable>
        <Pressable style={[styles.pressable, {width: width / 8}]}>
          <Entypo name="dots-three-horizontal" size={20} color={colors.BLUE} />
        </Pressable>
      </View>
      <ScrollView style={styles.SecContaier}>
        <View style={styles.searchContainer}>
          <EvilIcons
            name="search"
            size={30}
            color={colors.GRAY}
            style={{marginLeft: 10}}
          />
          <TextInput placeholder="Search" placeholderTextColor={colors.GRAY} />
        </View>
        <ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
          style={{marginTop: 25}}>
          {advertisement.map((val, indx) => {
            return (
              <View style={{}} key={indx}>
                <View style={{width}}>
                  <Image style={styles.adsImg} source={val} />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            bottom: '-3%',
            alignSelf: 'center',
          }}>
          <ShowIndicator
            arr={Array.from({length: 4})}
            scrollX={scrollX}
            color={colors.BLUE}
          />
        </View>
        <View style={styles.choiceContainer}>
          {choices.map((val, indx) => {
            return (
              <Pressable
                key={indx}
                //
                onPress={() => navigation.navigate(val.screenName)}>
                <View style={styles.choiceConImg}>
                  <Image style={styles.choicesImg} source={val.img} />
                </View>
                <Text style={{textAlign: 'center'}}>{val.name}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
  header: {
    flexDirection: 'row',
    margin: 20,
  },
  iconView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  txt1: {fontSize: 20, color: colors.WHITE, marginLeft: 20, marginTop: 20},
  txt2: {fontSize: 20, color: colors.WHITE, marginLeft: 20, marginTop: 5},
  txt3: {fontSize: 18, color: colors.BLUE},

  row: {flexDirection: 'row'},
  rowBtn: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pressable: {
    width: width / 3,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
  SecContaier: {
    backgroundColor: colors.WHITE_GRAY,
    flex: 1,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    flexDirection: 'row',
    width: width - 80,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    alignSelf: 'center',
    // justifyContent: 'space-between',
  },
  adsImg: {
    width: width - 60,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 30,
    height: height / 5,
  },
  choiceContainer: {
    flexDirection: 'row',
    marginTop: 28,
  },
  choiceConImg: {
    width: 60,
    height: 60,
    backgroundColor: colors.WHITE,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  choicesImg: {
    width: 35,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    height: 35,
  },
});
