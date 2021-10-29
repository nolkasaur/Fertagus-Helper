import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showFirstLevelBtns, setShowFirstLevelBtns] = useState(true);
  const [showBusSecondLevelBtns, setShowBusSecondLevelBtns] = useState(false);
  const [showTrainSecondLevelBtns, setShowTrainSecondLevelBtns] = useState(false);
  const [showThirdLevelBtns, setShowThirdLevelBtns] = useState(false);
  const [showFourthLevelBtns, setShowFourthLevelBtns] = useState(false);
  const [showResultArea, setShowResultArea] = useState(false);

  global.transportType;
  global.whereFrom;
  global.whereTo;
  global.dayOfTheWeek;

  return (
    <View style={styles.container}>
      {/* FIRST VIEW - TRANSPORT TYPE */}
      {showFirstLevelBtns ? <View nativeID="btnTrains" style={styles.buttonTrains}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowTrainSecondLevelBtns(true); global.transportType='TRAIN' }} title="FERTAGUS (COMBOIOS)"/>
      </View> : null}
      {showFirstLevelBtns ? <View nativeID="btnBuses" style={styles.buttonBuses}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowBusSecondLevelBtns(true); global.transportType='BUS' }} title="SUL-FERTAGUS (AUTOCARROS)"/>
      </View> : null }

      {/* SECOND VIEW - BUS - WHERE FROM */}
      {showBusSecondLevelBtns ? <View nativeID="btnBusAmora" style={styles.buttonBusAmora}>
        <Button  onPress={() => {    setShowFourthLevelBtns(true); setShowBusSecondLevelBtns(false); global.whereFrom='AMORA' }} title="A PARTIR DE AMORA"/>
      </View> : null }
      {showBusSecondLevelBtns ? <View nativeID="btnBusStation" style={styles.buttonBusStation}>
        <Button  onPress={() => {    setShowFourthLevelBtns(true); setShowBusSecondLevelBtns(false); global.whereFrom='STATION' }} title="A PARTIR DA ESTAÇÃO"/>
      </View> : null }

      {/* SECOND VIEW - TRAIN - WHERE FROM */}
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainAmora" style={styles.buttonTrainAmora}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='AMORA' }} title="A PARTIR DE AMORA"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainCorroios" style={styles.buttonTrainCorroios}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='CORROIOS' }} title="A PARTIR DE CORROIOS"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainPragal" style={styles.buttonTrainPragal}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='PRAGAL' }} title="A PARTIR DO PRAGAL"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainCampolide" style={styles.buttonTrainCampolide}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='CAMPOLIDE' }} title="A PARTIR DE CAMPOLIDE"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainSeterios" style={styles.buttonTrainSeterios}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='SETERIOS' }} title="A PARTIR DE SETE RIOS"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainEntrecampos" style={styles.buttonTrainEntrecampos}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='ENRTECAMPOS' }} title="A PARTIR DE ENTRECAMPOS"/>
      </View> : null }
      {showTrainSecondLevelBtns ? <View nativeID="btnTrainRomaareeiro" style={styles.buttonTrainRomaareeiro}>
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='ROMAAREEIRO' }} title="A PARTIR DE ROMA-AREEIRO"/>
      </View> : null }

      {/* THIRD VIEW - WHERE TO */}
      {showThirdLevelBtns ? <View nativeID="btnToLisboa" style={styles.buttonToLisboa}>
        <Button  onPress={() => {    setShowFourthLevelBtns(true); setShowThirdLevelBtns(false); global.whereTo='LISBOA' }} title="SENTIDO MARGEM-SUL -> LISBOA"/>
      </View> : null }
      {showThirdLevelBtns ? <View nativeID="btnToMargemSul" style={styles.buttonToMargemSul}>
        <Button  onPress={() => {    setShowFourthLevelBtns(true); setShowThirdLevelBtns(false); global.whereTo='MARGEMSUL' }} title="SENTIDO LISBOA -> MARGEM-SUL"/>
      </View> : null }

      {/* FOURTH VIEW - DAY OF THE WEEK */}
      {showFourthLevelBtns ? <View nativeID="btnWeekDay" style={styles.buttonWeekDay}>
        <Button  onPress={() => {    setShowFourthLevelBtns(false); setShowResultArea(true); global.dayOfTheWeek='WEEKDAY' }} title="DIA ÚTIL"/>
      </View> : null }
      {showFourthLevelBtns ? <View nativeID="btnSaturday" style={styles.buttonSaturday}>
        <Button  onPress={() => {    setShowFourthLevelBtns(false); setShowResultArea(true); global.dayOfTheWeek='SATURDAY' }} title="SÁBADO"/>
      </View> : null }
      {showFourthLevelBtns ? <View nativeID="btnSundayHoliday" style={styles.buttonSundayHoliday}>
        <Button  onPress={() => {    setShowFourthLevelBtns(false); setShowResultArea(true); global.dayOfTheWeek='SUNDAYHOLIDAY' }} title="DOMINGO/FERIADO"/>
      </View> : null }

      {/* RESULT */}
      {showResultArea ? <View nativeID="resultArea" style={styles.resultArea}>
        <Text style={styles.resultTitle}>{global.transportType === 'TRAIN' ? "PRÓXIMO COMBOIO EM" : "PRÓXIMO AUTOCARRO EM"}</Text>
        <Text style={styles.resultTime}>40 minutos</Text>
      </View> : null}

      {/* RESET */}
      <View nativeID="btnReset" style={styles.buttonReset}>
        <Button  onPress={() => {    setShowFirstLevelBtns(true); setShowBusSecondLevelBtns(false); setShowTrainSecondLevelBtns(false); setShowThirdLevelBtns(false); setShowFourthLevelBtns(false); setShowResultArea(false) }} title="IR PARA O INÍCIO"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonReset: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  resultArea: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  resultTitle: {
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 25,
  },
  resultTime: {
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'blue',
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
  buttonBusAmora: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBusStation: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainAmora: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainCorroios: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainPragal: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainCampolide: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainSeterios: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainEntrecampos: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrainRomaareeiro: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonToLisboa: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonToMargemSul: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWeekDay: {
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSaturday: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSundayHoliday: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
