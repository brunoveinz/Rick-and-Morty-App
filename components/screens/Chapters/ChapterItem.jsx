import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GlobalStyles from '../../../constants/GlobalStyles';

const ChapterItem = ({ chapter }) => {
  return (
    <View style={styles.chapterContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{chapter.name}</Text>
        <Text style={styles.info}>Episode: {chapter.episode}</Text>
        <Text style={styles.info}>Air Date: {chapter.airDate}</Text>
      </View>
    </View>
  );
}

export default ChapterItem;

const styles = StyleSheet.create({
  chapterContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 16,
    backgroundColor: GlobalStyles.colors.alienPurple,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    fontFamily: 'Creepster-Regular',
    textAlign: 'center'
  },
  info: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
});
