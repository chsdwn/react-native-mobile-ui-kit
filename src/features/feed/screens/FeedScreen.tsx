import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import { SafeLayout, TextInput } from '@/components';
import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { FeedContent, Header } from '../components';

const contents = Array(4)
  .fill(null)
  .map((_, i) => ({
    id: `content-${i + 1}`,
    title: 'Header',
    description:
      "He'll want to use your yatch, and I don't want this thing smelling like fish.",
    date: '8m ago',
  }));

export const FeedScreen = () => {
  const styles = useStyles(styleSheet);

  return (
    <SafeLayout style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Feed" />
        <TextInput placeholder="Search" style={styles.searchInput} />

        {contents.map((content) => (
          <FeedContent
            key={content.id}
            id={content.id}
            title={content.title}
            description={content.description}
            date={content.date}
          />
        ))}

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/feed/300/200' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeLayout>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: theme.spacing.md,
  },
  searchInput: {
    borderRadius: theme.roundness.full,
    marginTop: theme.spacing.lg,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: theme.roundness.default,
    marginTop: theme.spacing.md,
  },
  image: {
    aspectRatio: 3 / 2,
    width: '100%',
  },
}));
