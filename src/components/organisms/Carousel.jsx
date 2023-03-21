import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
// import Colors from '../../constants/styles';

import SingleRecipeCarousel from '../molecules/SingleRecipeCarousel';


const { width: screenWidth } = Dimensions.get('window');


const Carousel = ({ data, title = null,  CardComponent, horizontal = true, Header }) => {
    // const [link, setLink] = useState("#");

    const renderItem = ({ item }) => {
        // const link = `https://example.com/${item.id}`;
        return <CardComponent {...item} />;
      };


    return (
        <View style = {styles.container}>
            {Header && <Header title={title}/>}
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style = {styles.flatList}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        width: '90%',
        alignSelf:'center',
        // backgroundColor:'red',
    },
    flatList:{
        // backgroundColor: Colors['creamyWhite'],

    }
});

export default Carousel;