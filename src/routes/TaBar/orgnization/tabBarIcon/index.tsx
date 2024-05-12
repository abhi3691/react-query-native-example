import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface props {
  color: string;
  size: number;
  name: string;
}

const TabBarIcon: FC<props> = ({color, name, size}) => {
  return <Ionicons name={name} color={color} size={size} />;
};

export default TabBarIcon;
