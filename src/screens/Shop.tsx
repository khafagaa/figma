import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Ionicons, Entypo} from '../constants/Icons';
import colors from '../constants/colors';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import sagaAction from '../saga/saga.action';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Shop = () => {
  let navigation = useNavigation();
  const dispatch = useDispatch();
  const [list, setList] = useState([
    'Popular',
    'Fashion',
    'Travel',
    'Electronic',
    'Electronic',
  ]);

  const [listPick, setListPick] = useState('Popular');
  const loader = useSelector<any>(state => state.auth.loader);
  let shopData: any = useSelector<any>(state => state.auth.shopData);

  useEffect(() => {
    //* get data from BE
    dispatch({type: sagaAction.GET_SHOP_DATA});
  }, [listPick]);

  const RenderDataShop = useCallback(
    ({item}) => {
      console.log('rendering item ', item);
      return (
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() =>
            navigation.navigate('ShopDetails', {
              item,
            })
          }>
          <ImageBackground
            source={item.logo}
            style={{
              width: width / 2 - 30,
              height: height / 5,
            }}
            imageStyle={{borderRadius: 30}}>
            <Image source={item.img} style={styles.img} />
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{marginTop: 10, fontSize: 21}}>{item.brand}</Text>
            <Entypo
              name="heart-outlined"
              size={20}
              color={colors.BLUE}
              style={{marginTop: 12}}
            />
          </View>
          <Text style={{fontSize: 15}}>{item.descibtion}</Text>
        </TouchableOpacity>
      );
    },
    [shopData],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          size={35}
          color={colors.BLACK}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25}}> shop online </Text>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          style={styles.choiceContainer}
          showsHorizontalScrollIndicator={false}>
          {list.map((val, indx) => {
            return (
              <Pressable
                key={indx}
                style={[
                  styles.pressCon,
                  {
                    backgroundColor:
                      listPick == val ? colors.BLUE : colors.LITE_GRAY,
                  },
                ]}
                onPress={() => {
                  setListPick(val);
                  //* when the user pick from list => calling BE to display the data but we are now saving the data
                }}>
                <Text
                  style={[
                    styles.txt,
                    {color: listPick == val ? colors.WHITE : colors.DARK_GRAY},
                  ]}>
                  {val}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {loader && (
        <View
          style={{
            flex: 1,
            // alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <ActivityIndicator size={40} />
        </View>
      )}
      <FlatList
        data={shopData}
        renderItem={RenderDataShop}
        numColumns={2}
        style={{marginTop: 40, alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    margin: 20,
    flexDirection: 'row',
  },
  choiceContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  pressCon: {
    width: 100,
    height: 40,
    borderRadius: 30,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    top: 5,
    left: 5,
  },
});
