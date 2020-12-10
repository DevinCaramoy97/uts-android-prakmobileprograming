import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Container, Header, Content, Item, Input, Label, Button, Text, H1 } from 'native-base';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
    };

    onLogin() {
        const { username, password } = this.state;
        if (username != null && password != null) {
            if (username == 'test') {
                if (password == 'test') {
                    Alert.alert('Berhasil', 'Mantap');
                } else {
                    Alert.alert('Error', 'Nama pengguna / kata sandi salah');
                }
            } else {
                Alert.alert('Error', 'Nama pengguna / kata sandi salah');
            }
        } else {
            Alert.alert('Error', 'Silahkan masukan nama pengguna dan kata sandi');
        }
    }

    render() {
        return (
            <Container>
                <Text style={{ marginTop: 60, textAlign: 'center' }}><H1>Login Aplikasi</H1></Text>
                <Content style={{ marginHorizontal: 12, marginTop: 30 }}>
                    <Item rounded>
                        <Input value={this.state.username}
                            keyboardType='username'
                            onChangeText={(username) => this.setState({ username })}
                            placeholder='Masukan nama pengguna'
                            placeholderTextColor='blue' />
                    </Item>
                    <Item rounded style={{ marginTop: 30 }}>
                        <Input value={this.state.password}
                            keyboardType='password'
                            onChangeText={(password) => this.setState({ password })}
                            placeholder='Masukan kata sandi'
                            secureTextEntry={true}
                            placeholderTextColor='blue' />
                    </Item>


                    <Button rounded block style={{ marginTop: 20, }}
                        onPress={this.onLogin.bind(this)}
                    >
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}