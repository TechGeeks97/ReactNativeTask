import {StyleSheet} from 'react-native';
import colors from '../../config/assets/colors';
export const styles = StyleSheet.create({
  main: {
    height: 55,
    width: '95%',
    backgroundColor: colors.white,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: '2.5%',
    marginRight: '2.5%',
  },
  icon: {
    width: '12%',
  },
  textInput: {
    fontSize: 19,
    color: colors.grey,
    fontWeight: '500',
    width: '88%',
  },
});
