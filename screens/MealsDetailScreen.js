import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealsDetailsScreen = props => {
    return (<View style={styles.screen}>
        <Text>The MealsDetailsScreen!</Text>
    </View>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealsDetailsScreen;