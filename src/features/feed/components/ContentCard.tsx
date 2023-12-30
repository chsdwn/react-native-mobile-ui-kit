import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { PrivateBottomBarNavigationProp } from '@/types';

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSource: ImageSourcePropType;
};

export const ContentCard = ({
  id,
  title,
  description,
  date,
  imageSource,
}: Props) => {
  const styles = useStyles(styleSheet);
  const navigation = useNavigation<PrivateBottomBarNavigationProp>();

  const handlePress = () => {
    navigation.navigate('PostDetails', { id });
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <View style={styles.cardContainer}>
        <Image
          source={imageSource}
          style={styles.cardImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={styles.cardDate}>{date}</Text>
    </Pressable>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  card: {},
  cardContainer: {
    overflow: 'hidden',
    borderRadius: theme.roundness.default,
    marginTop: theme.spacing.md,
  },
  cardImage: {
    aspectRatio: 3 / 2,
    width: '100%',
  },
  cardTitle: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.content,
    fontWeight: '600',
    color: theme.colors.black,
  },
  cardDescription: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.label,
    color: theme.colors.black,
  },
  cardDate: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.label,
    fontWeight: '400',
    color: theme.colors.grayDark,
  },
}));
