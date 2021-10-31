import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showFirstLevelBtns, setShowFirstLevelBtns] = useState(true);
  const [showBusSecondLevelBtns, setShowBusSecondLevelBtns] = useState(false);
  const [showTrainSecondLevelBtns, setShowTrainSecondLevelBtns] = useState(false);
  const [showThirdLevelBtns, setShowThirdLevelBtns] = useState(false);
  const [showFourthLevelBtns, setShowFourthLevelBtns] = useState(false);
  const [showResultArea, setShowResultArea] = useState(false);

  const [res, setRes] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setRes(() => calcResult());
    }, 100);
    return () => clearInterval(myInterval);
  }, []);

  global.transportType;
  global.whereFrom;
  global.whereTo;
  global.dayOfTheWeek;

  function calcResult(){
    const customData = require('./timetableData/data.json')

    var listOfHours = []
    var finalResult = -1
    var finalText

    var timeNow = new Date()
    timeNow.setSeconds(0)
    timeNow.setMilliseconds(0)

    function getListOfHours(){
      if(global.transportType === 'TRAIN'){
        if(global.whereFrom === 'AMORA'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.amora.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.amora.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.amora.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.amora.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.amora.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.amora.norteSul.domingosFeriados.hour
            }
          }
        } else if(global.whereFrom === 'CORROIOS'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.corroios.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.corroios.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.corroios.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.corroios.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.corroios.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.corroios.norteSul.domingosFeriados.hour
            }
          }
        } else if(global.whereFrom === 'PRAGAL'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.pragal.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.pragal.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.pragal.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.pragal.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.pragal.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.pragal.norteSul.domingosFeriados.hour
            }
          }
        } else if(global.whereFrom === 'CAMPOLIDE'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.campolide.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.campolide.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.campolide.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.campolide.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.campolide.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.campolide.norteSul.domingosFeriados.hour
            }
          }
        } else if(global.whereFrom === 'SETERIOS'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.seterios.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.seterios.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.seterios.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.seterios.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.seterios.norteSul.diasUteis.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.seterios.norteSul.diasUteis.hour
            }
          }
        } else if(global.whereFrom === 'ENTRECAMPOS'){
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.entrecampos.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.entrecampos.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.entrecampos.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.entrecampos.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.entrecampos.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.entrecampos.norteSul.domingosFeriados.hour
            }
          }
        } else {
          if(global.whereTo === 'LISBOA'){
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.sulNorte.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.sulNorte.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.sulNorte.domingosFeriados.hour
            }
          } else {
            if(global.dayOfTheWeek === 'WEEKDAY'){
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.norteSul.diasUteis.hour
            } else if(global.dayOfTheWeek === 'SATURDAY'){
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.norteSul.sabados.hour
            } else {
              listOfHours = customData.transportes.fertagusComboios.romaareeiro.norteSul.domingosFeriados.hour
            }
          }
        }
      } else {
        if(global.whereFrom === 'AMORA'){
          if(global.dayOfTheWeek === 'WEEKDAY'){
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeAmora.diasUteis.hour
          } else if(global.dayOfTheWeek === 'SATURDAY'){
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeAmora.sabados.hour
          } else {
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeAmora.domingosFeriados.hour
          }
        } else {
          if(global.dayOfTheWeek === 'WEEKDAY'){
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeEstacao.diasUteis.hour
          } else if(global.dayOfTheWeek === 'SATURDAY'){
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeEstacao.sabados.hour
          } else {
            listOfHours = customData.transportes.fertagusAutocarros.partidaDeEstacao.domingosFeriados.hour
          }
        }
      }
    }

    getListOfHours()

    for(var x=0; x<listOfHours.length;x++){
      var time = new Date()
      time.setHours(parseInt(listOfHours[x][0] + "" + listOfHours[x][1]))
      time.setMinutes(parseInt(listOfHours[x][2] + "" + listOfHours[x][3]))
      time.setSeconds(0)
      time.setMilliseconds(0)
      if(time >= timeNow){
        finalResult = time - timeNow
        break
      }
    }

    {/* calcular o tempo ate ao primeiro transporte do dia seguinte. isto provavelmente vai dar merda, por exemplo em situacoes em que o dia seguinte = feriado. fix in the future TM */}
    {/* does this even work at all???? please test */}
    if(finalResult === -1){
      var weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      if(weekday[new Date().getDay()] === "saturday"){
        global.dayOfTheWeek="SATURDAY"
      } else if(weekday[new Date().getDay()] === "sunday"){
        global.dayOfTheWeek="SUNDAYHOLIDAY"
      }
      
      getListOfHours()

      var timeMidnight1 = new Date()
      timeMidnight1.setHours(24)
      timeMidnight1.setMinutes(0)
      timeMidnight1.setSeconds(0)
      timeMidnight1.setMilliseconds(0)

      var timeMidnight2 = new Date()
      timeMidnight2.setHours(0)
      timeMidnight2.setMinutes(0)
      timeMidnight2.setSeconds(0)
      timeMidnight2.setMilliseconds(0)

      var time = new Date()
      time.setHours(parseInt(listOfHours[0][0] + "" + listOfHours[0][1]))
      time.setMinutes(parseInt(listOfHours[0][2] + "" + listOfHours[0][3]))
      time.setSeconds(0)
      time.setMilliseconds(0)

      finalResult = (timeMidnight1 - timeNow) + (time - timeMidnight2)
    }

    var hrs = Math.floor((finalResult / (1000 * 60 * 60)) % 24)
    var mns = Math.floor((finalResult / (1000 * 60)) % 60)
  
    finalText = hrs === 0 ? mns === 0 ? "É AGORA, CORRE!" : mns + " minutos" : hrs + " horas e " + mns + " minutos"

    return finalText
  }

  return (
    <View style={styles.container}>
      {/* FIRST VIEW - TRANSPORT TYPE */}
      {showFirstLevelBtns ? <View nativeID="btnTrains" style={styles.buttonTrains}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowTrainSecondLevelBtns(true); global.transportType='TRAIN' }} title="FERTAGUS (COMBOIOS)"/>
      </View> : null}
      {showFirstLevelBtns ? <View nativeID="btnBuses" style={styles.buttonBuses}>
        <Button  onPress={() => {    setShowFirstLevelBtns(false); setShowBusSecondLevelBtns(true); global.transportType='BUS' }} title="SUL-FERTAGUS (AUTOCARROS 1A)"/>
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
        <Button  onPress={() => {    setShowThirdLevelBtns(true); setShowTrainSecondLevelBtns(false); global.whereFrom='ENTRECAMPOS' }} title="A PARTIR DE ENTRECAMPOS"/>
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
        <Text style={styles.resultTime}>{res}</Text>
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
