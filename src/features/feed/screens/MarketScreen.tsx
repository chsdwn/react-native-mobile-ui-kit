import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { SafeLayout, TextInput } from '@/components';
import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { Header, ItemCard } from '../components';

const items = [
  {
    id: 1,
    title: 'Lorem',
    price: 9.99,
  },
  {
    id: 2,
    title: 'Ipsum',
    price: 29.99,
  },
  {
    id: 3,
    title: 'Dolor Sit Amet',
    price: 14.99,
  },
  {
    id: 4,
    title: 'Cras mauris, eleifend',
    price: 129.99,
  },
];

export const MarketScreen = () => {
  const styles = useStyles(styleSheet);

  return (
    <SafeLayout style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.padHorizontal}>
          <Header title="Market" />
          <TextInput placeholder="Search" style={styles.searchInput} />

          <Text style={styles.title}>Hot deals</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {items.map((item, index) => (
            <ItemCard
              key={`hot-deal-${item.id}`}
              title={item.title}
              price={item.price}
              imageSource={{
                uri: `https://picsum.photos/seed/${item.id}-${item.title}/110`,
              }}
              lastItem={index + 1 === items.length}
            />
          ))}
        </ScrollView>

        <View style={styles.padHorizontal}>
          <Text style={styles.title}>Trending</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {items.map((item, index) => (
            <ItemCard
              key={`trending-${item.id}`}
              title={item.title}
              price={item.price}
              imageSource={{
                uri: `https://picsum.photos/seed/trending-${item.id}-${item.title}/110`,
              }}
              lastItem={index + 1 === items.length}
            />
          ))}
        </ScrollView>

        <View style={styles.padHorizontal}>
          <Text style={styles.title}>Deals</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {items.map((item, index) => (
            <ItemCard
              key={`deal-${item.id}`}
              title={item.title}
              price={item.price}
              imageSource={{
                uri: `https://picsum.photos/seed/deal-${item.id}-${item.title}/110`,
              }}
              lastItem={index + 1 === items.length}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeLayout>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
  },
  padHorizontal: {
    paddingHorizontal: theme.spacing.md,
  },
  scrollView: {
    paddingVertical: theme.spacing.md,
  },
  searchInput: {
    borderRadius: theme.roundness.full,
    marginTop: theme.spacing.lg,
  },
  title: {
    marginTop: theme.spacing.lg,
    fontSize: 24,
    fontWeight: '500',
    color: theme.colors.black,
  },
  horizontalScroll: {
    marginTop: theme.spacing.md,
  },
  horizontalScrollContent: {
    paddingHorizontal: theme.spacing.md,
  },
}));
