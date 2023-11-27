import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

type Props = {
  title: string;
  description: string;
  date: string;
  imageSource: ImageSourcePropType;
};

export const ContentCard = ({
  title,
  description,
  date,
  imageSource,
}: Props) => {
  const styles = useStyles(styleSheet);

  return (
    <View style={styles.card}>
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
    </View>
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
