import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';

import React, { useEffect, useRef } from 'react';
import { interpolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';

import { Box } from '@/components';
import { arTattooList } from '@/data/ARData';
import { store } from '@/providers/store';
import { SCREEN_WIDTH } from '@/utils/layout-utils';
import { isUserPremium, openPaywall } from '@/utils/user-premium';

import {
  getArPreviewData,
  setCurrentTatto,
  setNewTattooScrollToFirst,
} from '../../store/arPreviewStore';
import { CellCarouselCircle } from '../CellCarouselCircle/CellCarouselCircle';
import { styles } from './CarouseCircleList.styles';

let tmpSelectedIndex = 0;

const arTattooList = [
    {
      id: "tattoo1",          // Unique identifier for the tattoo
      name: "Dragon Tattoo",  // Name or title of the tattoo
      imageUrl: "https://...",// URL to the tattoo image
      isPro: false,           // Boolean indicating if it's a pro feature
      description: "A cool dragon tattoo design.", // Description of the tattoo
      category: "Dragon",     // Category for organization purposes
      price: 0,               // Price if applicable, or premium indicator
      rating: 4.5,            // Rating for the tattoo, for user preference
      tags: ["dragon", "cool", "asian"], // Tags for searchability
    },
    // More tattoo objects follow...
  ];
  



export const CarouseCircleList = ({ onCarouselItemClick }) => {
  const carouselRef = useRef(null);
  const itemSize = 70;
  const centerOffset = SCREEN_WIDTH / 2 - itemSize / 2;
  const currentTattoo = useSelector(getArPreviewData);

  useEffect(() => {
    if (currentTattoo.scrollToFirst) {
      if (carouselRef.current !== null && arTattooList.length > 0) {
        const index = 0;
        carouselRef.current?.scrollTo({ index, animated: true });
        store.dispatch(setNewTattooScrollToFirst(false));
      }
    }
  }, [currentTattoo.scrollToFirst]);

  const animationStyle = React.useCallback(
    (value) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [10, 10, 10, 0, -10, -10, -10],
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [15, 15, 15, 15, 15],
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.9, 1, 0.9, 0.8],
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          { scale },
        ],
      };
    },
    [centerOffset],
  );

  return (
    <Box style={styles.boxMainConatainer}>
      <Box style={styles.boxCircleOverlayContainer}>
        <Box style={styles.boxCenterCircleOverlay} />
      </Box>

      <Carousel
        ref={carouselRef}
        width={itemSize}
        height={itemSize}
        style={styles.carouseCircleContainer}
        loop={false}
        scrollAnimationDuration={600}
        data={arTattooList}
        renderItem={({ index, item }) => (
          <CellCarouselCircle
            arTattoo={item}
            onPress={() => {
              if (isUserPremium() || !item.isPro) {
                onCarouselItemClick(
                  index === arTattooList.length - 1,
                  tmpSelectedIndex === index,
                );
                if (carouselRef.current !== null) {
                  carouselRef.current?.scrollTo({ index, animated: true });
                }
                store.dispatch(setCurrentTatto(item));
              } else {
                openPaywall();
              }
            }}
          />
        )}
        onSnapToItem={(index) => {
          const currentItem = arTattooList[index];
          tmpSelectedIndex = index;
          store.dispatch(setCurrentTatto(currentItem));
        }}
        customAnimation={animationStyle}
      />
    </Box>
  );
};


export const styles = StyleSheet.create({
  boxMainConatainer: {
    width: SCREEN_WIDTH,
    height: 100,
  },
  carouseCircleContainer: {
    height: '100%',
    width: '100%',
  },
  boxCircleOverlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxCenterCircleOverlay: {
    height: normalize(75),
    width: normalize(75),

    borderColor: colors.white,
    borderWidth: normalize(5),
    borderRadius: normalize(75 / 2),
  },
});
