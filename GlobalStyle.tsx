import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});