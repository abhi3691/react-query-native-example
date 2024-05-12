import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

interface props {
  item: any;
  index: number;
}

const RenderItem: FC<props> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item?.images[0]}} style={styles.image} />
      <View style={styles.itemContsiner}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.info}>{item?.description}</Text>
      </View>
    </View>
  );
};

export default RenderItem;
