import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { PrivateBottomBarNavigationProp } from '@/types';

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const FeedContent = ({ id, title, description, date }: Props) => {
  const styles = useStyles(styleSheet);
  const navigation = useNavigation<PrivateBottomBarNavigationProp>();

  const handlePress = () => {
    navigation.navigate('PostDetails', { id });
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `https://picsum.photos/seed/${title}/50` }}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
  },
  imageContainer: {
    borderRadius: theme.roundness.default,
    overflow: 'hidden',
    width: theme.spacing.xl,
    height: theme.spacing.xl,
  },
  image: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginLeft: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.fontSize.content,
    fontWeight: '600',
    color: theme.colors.black,
  },
  date: {
    fontSize: theme.fontSize.label,
    fontWeight: '400',
    color: theme.colors.grayDark,
  },
  description: {
    fontSize: theme.fontSize.label,
    color: theme.colors.black,
  },
}));
