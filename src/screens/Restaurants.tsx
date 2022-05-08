import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

interface IProps {}

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurants'>;
const Restaurants = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Restaurants</Text>

      <ScrollView>
        <RestaurantCard
          name="Sushi man"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Bugger dude"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Fine Dinning"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Korean Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Italian Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
        <RestaurantCard
          name="Thailand Food"
          onPress={name => {
            navigation.navigate('Restaurant', { name });
          }}
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {},
});
