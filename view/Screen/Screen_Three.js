import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import Svg, { Circle } from 'react-native-svg';
import { LineChart } from 'react-native-chart-kit';

const customFont = require('./src/fonts/Jomhuria-Regular.ttf');

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFontAsync = async () => {
    await Font.loadAsync({
      CustomFont: customFont,
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFontAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }


  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./src/assets/Logo.png')}
          style={styles.imagen}
        />
        <Text style={styles.text}>ParkingSlot</Text>
        
      </View>
      <View style={styles.statsContainer}>
        <StatBox />
        <StatBox />
        <StatBox />
      </View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const StatBox = () => {
  return (
    <View style={styles.statBox}>
      <Svg height={50} width={50}>
        <Circle
          cx={25}
          cy={25}
          r={20}
          fill="white"
          stroke="black"
          strokeWidth={1}
        />
      </Svg>
      <Text style={styles.statText}>Stats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingLeft: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 50,

    marginLeft: 10,
  },
  imagen: {
    width: 50,
    height: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  statBox: {
    alignItems: 'center',
    marginRight: 10,
  },
  statText: {
    fontFamily: 'CustomFont',
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
});