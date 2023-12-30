import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { SafeLayout } from '@/components';
import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { PostDetailsRouteProp } from '@/types';

export const PostDetailsScreen = () => {
  const styles = useStyles(styleSheet);
  const {
    params: { id },
  } = useRoute<PostDetailsRouteProp>();

  return (
    <SafeLayout>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://picsum.photos/seed/post-details-${id}/300/200`,
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Post Title Here...</Text>
        <Text style={styles.label}>chsdwn</Text>
        <Text style={styles.content}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra eget mauris a elementum. Nullam at enim erat. Suspendisse faucibus est sit amet pretium luctus. Donec in viverra mauris. Nulla vitae nulla ut ligula mollis interdum id eget eros. Donec aliquet ligula id mauris sodales, at imperdiet lorem fringilla. Nulla aliquam neque enim, vitae finibus dolor iaculis et. Phasellus vulputate eros porta, pretium sapien vel, luctus nunc. Pellentesque ut nunc eu est ornare semper. Sed tristique quam purus, vitae elementum mi sagittis ut. Ut eu lectus feugiat, tristique metus vitae, consectetur turpis. Integer congue, dui ac suscipit scelerisque, nibh felis cursus nisi, a eleifend ante nisi sed elit. Nam pharetra tortor scelerisque, dignissim ipsum a, sodales metus. Vestibulum vel orci a urna commodo sagittis eu sed mi. Cras eu vestibulum massa.
      
      Vestibulum convallis volutpat maximus. Aenean placerat quis neque in luctus. Vestibulum suscipit nunc vitae nibh euismod gravida. Ut dignissim maximus aliquam. Nullam sit amet vestibulum ipsum. Curabitur at quam in ex tempor mattis. Aliquam erat volutpat. Aliquam eu libero eu quam consequat egestas. Vestibulum ac lorem erat. Fusce convallis vulputate odio. Etiam elementum dolor id gravida tincidunt. Ut congue lacus at leo accumsan pretium. Integer in aliquam sem. 

      Integer quis luctus nisi, et cursus tellus. In imperdiet vel odio nec scelerisque. Sed vitae accumsan urna. Sed et fringilla augue. Nulla placerat felis nec massa molestie tempus. Cras bibendum velit vel nunc tempor, vitae facilisis nisi vulputate. Aliquam vehicula tellus ac turpis placerat iaculis. Fusce diam lacus, luctus sit amet tempor congue, laoreet at magna. Donec nibh augue, malesuada in gravida vitae, imperdiet eu nisl.`}
        </Text>
      </ScrollView>
    </SafeLayout>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  imageContainer: {
    borderRadius: theme.roundness.default,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 3 / 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: theme.colors.black,
    marginTop: theme.spacing.lg,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.black,
    marginTop: theme.spacing.sm,
  },
  content: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.grayDarker,
    marginTop: theme.spacing.md,
  },
}));
