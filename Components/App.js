import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Ticket from './src/movieTicket/MovieTicket';
import { COLOURS } from './src/Styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeView}>
        <Ticket headerTitle={'Header'} footerTitle={'Footer'} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: COLOURS.colorBackgroundBlack
  }
});

export default App;
