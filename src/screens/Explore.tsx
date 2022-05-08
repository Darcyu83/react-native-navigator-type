import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Menu from '../components/Menu';

interface IProps {}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background-color: dodgerblue;
`;

const Container = styled.View`
  flex: 1;
  background-color: teal;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: black;
  font-size: 18px;
`;

const Explore = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {},
});
