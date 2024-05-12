import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getProducts} from './api_hooks/getProducts';
import colors from '../../components/constants/colors';
import RenderItem from './orgnization/renderItem';
import styles from './styles';

const ProductList = () => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const products: any[] = data?.data?.products;
  if (error?.message) {
    ToastAndroid.show(error?.message, 200);
  }
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={colors.black} />
      ) : (
        <FlatList
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
          style={styles.container}
          data={products}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductList;
