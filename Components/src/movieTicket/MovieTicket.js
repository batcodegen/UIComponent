import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { COLOURS } from '../Styles';

const { width } = Dimensions.get('window');
const ticketSVGPath = `M0,30 L0,60 C 10 70, 10 80, 0 90 M0,90
            L0,150 C 0 180, 20 180, 30 180 L${width - 50},180
            C${width - 40} 180, ${width - 20} 180, ${width - 20} 150
            L${width - 20},90
            C${width - 30} 80, ${width - 30} 70, ${width - 20} 60
            L${width - 20},30
            C${width - 20} 10, ${width - 30} 0, ${width - 50} 0
            L30,0 C 20 0, 0 0, 0 30`;
const createSeparator = () => {
  let views = [];
  // TODO: need to review this logic
  for (let i = 0; i < width / 10; i = i + 1) {
    views.push(<View key={i} style={styles.barStyle} />);
  }
  return views;
};
const Ticket = ({ headerTitle, footerTitle }) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={{ margin: 10 }}>
          <Svg fill={COLOURS.colorTicketGray} height={180} width={width - 20}>
            <Path d={ticketSVGPath} />
            <View style={styles.topContainer}>
              <Text>{headerTitle}</Text>
            </View>
            <View style={styles.separator}>{createSeparator()}</View>
            <View style={styles.bottomContainer}>
              <Text>{footerTitle}</Text>
            </View>
          </Svg>
        </View>
      </View>
    </>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOURS.colorBackgroundBlack,
    width: width,
    height: 200
  },
  topContainer: {
    flexDirection: 'row',
    height: 90,
    marginHorizontal: 15,
    marginTop: 15
  },
  separator: {
    flexDirection: 'row',
    height: 10,
    marginVertical: 5
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15
  },
  regularText: {
    marginTop: 2,
    color: COLOURS.fontColorWhite,
    fontSize: 11,
    marginHorizontal: 20
  },
  barStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
    backgroundColor: COLOURS.colorBackgroundBlack
  }
});
