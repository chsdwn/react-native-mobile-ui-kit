import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import { useStyles, useTheme } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

type Props = {
  title: string;
  price: number;
  imageSource: ImageSourcePropType;
  lastItem?: boolean;
};

export const ItemCard = ({ title, price, imageSource, lastItem }: Props) => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  return (
    <View
      style={[styles.container, !lastItem && { marginRight: theme.spacing.md }]}
    >
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    width: 110,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: theme.spacing.sm,
    color: theme.colors.black,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: theme.spacing.sm,
    color: theme.colors.black,
  },
}));
