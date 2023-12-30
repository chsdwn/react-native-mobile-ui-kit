import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';

import { SafeLayout } from '@/components';
import { useDebounce, useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { ContentCard, ContentSearch, Header } from '../components';

const initialItems = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

export const ContentScreen = () => {
  const styles = useStyles(styleSheet);

  const [items, setItems] = useState(initialItems);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(value, 800);

  useEffect(() => {
    if (!value) setItems(initialItems);
  }, [value]);

  useEffect(() => {
    if (!value) return;

    setLoading(true);
    const id = setTimeout(() => {
      const filteredItems = initialItems.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setItems(filteredItems);
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(id);
    };
  }, [debouncedValue]);

  return (
    <SafeLayout style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Content" />

        <ContentSearch
          items={items}
          debouncedValue={debouncedValue}
          value={value}
          onChangeText={setValue}
          loading={loading}
        />

        {!debouncedValue && (
          <>
            <ContentCard
              id="1"
              title="Header"
              description="He'll want to use your yatch, and I don't want this thing smelling like fish."
              date="8m ago"
              imageSource={{
                uri: 'https://picsum.photos/seed/content1/300/200',
              }}
            />
            <View style={styles.imageIndicatorContainer}>
              <View
                style={[styles.imageIndicator, styles.imageIndicatorActive]}
              />
              <View style={styles.imageIndicator} />
              <View style={styles.imageIndicator} />
            </View>

            <View style={styles.blockImageContainer}>
              <Image
                source={{
                  uri: 'https://picsum.photos/seed/contentBlock/300/500',
                }}
                style={styles.blockImage}
                resizeMode="cover"
              />
            </View>
          </>
        )}
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
  imageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageIndicator: {
    backgroundColor: theme.colors.gray,
    borderRadius: theme.roundness.full,
    marginLeft: theme.spacing.sm,
    width: theme.spacing.sm,
    height: theme.spacing.sm,
  },
  imageIndicatorActive: {
    backgroundColor: theme.colors.green,
  },
  blockImageContainer: {
    marginTop: theme.spacing.md,
    overflow: 'hidden',
    borderRadius: theme.roundness.default,
  },
  blockImage: {
    aspectRatio: 3 / 5,
    width: '100%',
  },
}));
