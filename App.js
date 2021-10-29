import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Updates from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showFirstLevelBtns, setShowFirstLevelBtns] = useState(true);
  const [showSecondLevelBtns, setShowSecondLevelBtns] = useState(false);
  return (
    <View style={styles.container}>
      {showFirstLevelBtns ? <View nativeID="btnTrains" style={styles.buttonTrains}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowSecondLevelBtns(true); }} title="FERTAGUS (COMBOIOS)"/>
      </View> : null}
      {showFirstLevelBtns ? <View nativeID="btnBuses" style={styles.buttonBuses}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowSecondLevelBtns(true); }} title="SUL-FERTAGUS (AUTOCARROS)"/>
      </View> : null }
      {showSecondLevelBtns ? <View nativeID="btnAmora" style={styles.buttonAmora}>
        <Button  onPress={() => {    setShowFirstLevelBtns(true);  }} title="SAÍDA DE AMORA"/>
      </View> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonTrains: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBuses: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAmora: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
