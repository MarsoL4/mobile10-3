import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const [selectedPizza, setSelectedPizza] = useState(null);


const pizzas = [
    {}
]

const handlePress = (pizza) => {
    // coloca no carrinho
    console.log('Pressed', pizza.name);
}
const handleLongPress = (pizza) => {
    //abre detalhes
    console.log('Long Pressed', pizza.name);

}  
const renderItem = ({ item }) => (
    <PizzaItem pizza={item} onPress={() => handlePress(item)}
    onLongPress={() => handleLongPress(item)}  />
);

const PizzaItem = ({ pizza, onPress, onLongPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Image source={{ uri: pizza.image }} style={styles.image} />
            <View style={styles.info}>
            <Text style={styles.name}>{pizza.name}</Text>
            <Text style={styles.price}>${pizza.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
});

export default PizzaItem;