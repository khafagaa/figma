import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export type indicatorProps = {
  arr: number[];
  scrollX: any;
  color: string;
};
export const ShowIndicator = (props: indicatorProps) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        flexDirection: 'row',
      }}>
      {props.arr.map((_, indx) => {
        const inputRange = [
          (indx - 1) * width,
          indx * width,
          (indx + 1) * width,
        ];
        const scale = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1.5, 0.5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={indx}
            style={{
              backgroundColor: props.color,
              marginHorizontal: 2,
              borderRadius: 20,
              width: 20,
              height: 8,
              transform: [
                {
                  scale,
                },
              ],
              justifyContent: 'flex-start',
            }}
          />
        );
      })}
    </View>
  );
};
