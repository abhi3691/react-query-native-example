import {StyleSheet} from 'react-native';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  itemContsiner: {
    width: '60%',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  info: {
    fontSize: 12,
    fontWeight: '200',
    color: colors.black,
    marginTop: 5,
    letterSpacing: 0.6,
  },
});

export default styles;
