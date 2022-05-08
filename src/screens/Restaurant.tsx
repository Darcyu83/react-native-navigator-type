import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../../App';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const Title = styled.Text`
  color: tomato;
  font-size: 24px;
`;
const Restaurant: React.FC<Props> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Restaurant</Text>
      <Title>Restaurant name : {route.params.name}</Title>

      <Text>Related Restaurant</Text>

      <RestaurantCard
        name="shushi 1"
        onPress={name => navigation.push('Restaurant', { name })}
      />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {},
});
