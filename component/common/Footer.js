import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Footer extends Component {
    render() {
        return (
            <>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Ini Footer
                    </Text>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    footerView: {
        backgroundColor: '#333333',
    },
    footerText: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
});

export default Footer