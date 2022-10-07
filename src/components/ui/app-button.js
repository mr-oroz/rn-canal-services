import React from "react";
import {View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Dimensions}from 'react-native';
import { THEME } from '../../theme';
import { AppText } from "./app-text";
const width = Dimensions.get('window').width;

export const AppButton = ({children, onPress, color = THEME.MAIN}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 213,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontWeight: '800'
    }
})