import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Ionicons, Entypo} from '../constants/Icons';
import colors from '../constants/colors';
const {height, width} = Dimensions.get('window');

const ShopDetails = () => {
  const route = useRoute();
  const {item}: any = route.params;
  let navigation = useNavigation();

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={item.logo}
        style={{
          width: width,
          height: height - 200,
        }}
        imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={35}
            color={colors.WHITE}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 25, color: colors.WHITE, fontWeight: 'bold'}}>
            {' '}
            {item.brand}{' '}
          </Text>
        </View>
        <View style={{top: '20%'}}>
          <Image
            source={item.img}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              // top: '20%',
              left: 5,
              alignSelf: 'flex-start',
              justifyContent: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 40,
              color: colors.WHITE,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            {item.descibtion}
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    margin: 20,
    flexDirection: 'row',
  },
});
