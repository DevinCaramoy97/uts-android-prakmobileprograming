import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Header extends Component {
    render() {
        return (
            <>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>
                        Ini Header
                    </Text>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#333333'
    },
    headerText: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
});

export default Header