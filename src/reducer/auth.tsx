import {createSlice} from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',

  initialState: {
    loader: true,
    accountPalance: 0,
    accountName: '',
    shopData: [],
  },
  reducers: {
    setLoad: (state, action) => {
      return {
        ...state,
        loader: action.payload,
      };
    },

    getData: (state, action) => {
      return {
        ...state,
        accountPalance: action.payload.accountPalance,
        accountName: action.payload.accountName,
      };
    },
    getShopData: (state, action) => {
      return {
        ...state,
        shopData: action.payload,
      };
    },
  },
});

export const {setLoad, getData, getShopData} = auth.actions;

export default auth.reducer;
