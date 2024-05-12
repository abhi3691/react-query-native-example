import {View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Show Product List"
          onPress={() => navigation.navigate('ProductList')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
