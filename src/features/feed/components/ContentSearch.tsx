import React from 'react';
import { Text, View } from 'react-native';

import { TextInput } from '@/components';
import { TextInputProps } from '@/components/TextInput';
import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

interface Props extends TextInputProps {
  items: string[];
  debouncedValue: string;
}

export const ContentSearch = ({ items, debouncedValue, ...rest }: Props) => {
  const styles = useStyles(styleSheet);

  return (
    <>
      <TextInput placeholder="Search" style={styles.searchInput} {...rest} />

      {debouncedValue && (
        <View style={styles.searchResultContainer}>
          {items.length > 0 &&
            items.map((item) => (
              <View
                key={`search-item-${item}`}
                style={styles.searchResultItemContainer}
              >
                <Text style={styles.searchResultItem}>{item}</Text>
              </View>
            ))}
          {items.length === 0 && (
            <View style={styles.noResultFoundContainer}>
              <Text style={styles.searchResultItem}>No result found</Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  searchInput: {
    borderRadius: theme.roundness.full,
    marginTop: theme.spacing.lg,
  },
  searchResultContainer: {
    paddingTop: theme.spacing.md,
  },
  searchResultItemContainer: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    marginHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  searchResultItem: {
    fontSize: theme.fontSize.content,
    fontWeight: '500',
    color: theme.colors.black,
  },
  noResultFoundContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
}));
