import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, RefreshControl, View, Image } from 'react-native';
import GlobalStyle from "./GlobalStyle"

export default function App() {

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  console.log(setTimeout)

  return (
    <View style={GlobalStyle.SafeArea}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text numberOfLines={5} style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi saepe et neque magni ipsa odio necessitatibus, minus voluptates aliquam repellat ab, cupiditate voluptatum, id expedita nesciunt enim accusamus fuga doloribus.</Text>
        <Image source={require('./src/assets/images/add_friends.png')} />
        <View style={styles.view} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  text: {
    padding: 40,
    lineHeight: 20,
    fontSize: 20
  },
  view: {
    height: 900,
    backgroundColor: 'red'
  }
})
