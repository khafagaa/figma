import {call, delay, put} from 'redux-saga/effects';

import {setLoad, getData ,getShopData} from '../../reducer/auth';

export function* getShop() {
  try {
    yield put(setLoad(true));

    console.log('hereee')
    //* variables
    let dataShop = [
      {
        brand:'adidas',
        img:require('../../assets/adidas.png'),
        logo:require('../../assets/adidasP.webp'),
        descibtion:'sale up to 30% Extra on Outlet'
      },{
        brand:'ZARA',
        img:require('../../assets/zara.png'),
        logo:require('../../assets/zaraP.jpg'),
        descibtion:'sale up to 50%'

      },{
        brand:'H&M',
        img:require('../../assets/h&m.png'),
        logo:require('../../assets/h&mP.jpg'),
        descibtion:'buy one get one'
      },{
        brand:'Levi`s',
        img:require('../../assets/lev.png'),
        logo:require('../../assets/levP.jpg'),
        descibtion:'sale up to 10%'
      }
    ];

    //* get news data


    delay(3000);

    //*firing endPoint
    // yield fetch(
    //     )
    //   .then(response => response.json())


    yield put(setLoad(false));
    yield put(getShopData(dataShop));
  } catch (error) {
    console.log(error);
  }
}

export function* getDetails() {
  try {

    //* get news data

    yield put(setLoad(true));

    delay(3000);

    yield put(getData({accountPalance:200,accountName:'khafaga'}));
    yield put(setLoad(false));
  } catch (error) {
    console.log(error);
  }
}
