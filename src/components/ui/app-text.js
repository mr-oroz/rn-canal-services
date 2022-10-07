import { StyleSheet, Text } from "react-native";
import React from "react";

export const AppText = props => (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
)

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Inter-Regular'
    }
})