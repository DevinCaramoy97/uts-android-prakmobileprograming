import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Item, Input, Label, Button, Text, H1, Thumbnail } from 'native-base';

export default class List extends Component {

    state = {
        listOpen: false,
        list1: false,
        list2: false,
        list3: false
    };

    renderList() {
        if (this.state.listOpen) {
            if (this.state.list1) {
                return (
                    <Container>
                        <Content style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <Card rounded>
                                <CardItem>
                                    <Body>
                                        <Text block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><H1 block style={{ textAlign: 'center', alignSelf: 'center' }}>Ayam Goreng</H1></Text>
                                        <Thumbnail source={require('../../assets/goreng.jpg')} style={{ height: 200, width: '100%', flex: 1, marginTop: 15, marginBottom: 20, borderRadius: 10 }} />
                                        <Text style={{ marginBottom: 10 }}>
                                            Ayam goreng is an Indonesian and Malaysian dish consisting of chicken deep fried in oil. Ayam goreng literally means "fried chicken" in Malay and also in many Indonesian regional languages
                                        </Text>
                                        <Text style={{ marginBottom: 10 }}>
                                            Ayam goreng is an Indonesian and Malaysian dish consisting of chicken deep fried in oil. Ayam goreng literally means "fried chicken" in Malay and also in many Indonesian regional languages
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Button rounded block style={{ textAlign: 'center', marginTop: 20, width: '100%' }}
                                onPress={() => this.setState({ listOpen: false, list1: false })}
                            >
                                <Text>Kembali</Text>
                            </Button>
                        </Content>
                    </Container>
                )
            } else if (this.state.list2) {
                return (
                    <Container>
                        <Content style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <Card rounded>
                                <CardItem>
                                    <Body>
                                        <Text block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><H1 block style={{ textAlign: 'center', alignSelf: 'center' }}>Ayam Bakar</H1></Text>
                                        <Thumbnail source={require('../../assets/bakar.jpg')} style={{ height: 200, width: '100%', flex: 1, marginTop: 15, marginBottom: 20, borderRadius: 10 }} />
                                        <Text style={{ marginBottom: 10 }}>
                                            Gak ribet ternyata bumbu dan bikin ayam bakar madu. Ada sih memang resep2 yg complicated, tapi saya ambil yg paling simple
                                        </Text>
                                        <Text style={{ marginBottom: 10 }}>
                                            Gak ribet ternyata bumbu dan bikin ayam bakar madu. Ada sih memang resep2 yg complicated, tapi saya ambil yg paling simple
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Button rounded block style={{ textAlign: 'center', marginTop: 20, width: '100%' }}
                                onPress={() => this.setState({ listOpen: false, list2: false })}
                            >
                                <Text>Kembali</Text>
                            </Button>
                        </Content>
                    </Container>
                )
            } else if (this.state.list3) {
                return (
                    <Container>
                        <Content style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                            <Card rounded>
                                <CardItem>
                                    <Body>
                                        <Text block style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><H1 block style={{ textAlign: 'center', alignSelf: 'center' }}>Pepes Ayam</H1></Text>
                                        <Thumbnail source={require('../../assets/pepes.jpg')} style={{ height: 200, width: '100%', flex: 1, marginTop: 15, marginBottom: 20, borderRadius: 10 }} />
                                        <Text style={{ marginBottom: 10 }}>
                                            Enak banget ini, apalagi kl bumbunya byk... rasanya meresap sampai ke tulang ayam.. Sy bkn pecinta pepes, tp sejak dibuatin sm teh eva jd ketagihan bt bikin sendiri
                                        </Text>
                                        <Text style={{ marginBottom: 10 }}>
                                            Enak banget ini, apalagi kl bumbunya byk... rasanya meresap sampai ke tulang ayam.. Sy bkn pecinta pepes, tp sejak dibuatin sm teh eva jd ketagihan bt bikin sendiri
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Button rounded block style={{ textAlign: 'center', marginTop: 20, width: '100%' }}
                                onPress={() => this.setState({ listOpen: false, list3: false })}
                            >
                                <Text>Kembali</Text>
                            </Button>
                        </Content>
                    </Container>
                )
            }
        }

        return (
            <Container>
                <Text style={{ marginTop: 60, textAlign: 'center' }}><H1>List Menu</H1></Text>
                <Container style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20 }}>
                    <Button rounded style={{ textAlign: 'left', marginTop: 20, width: '100%' }}
                        onPress={() => this.setState({ listOpen: true, list1: true })}
                    >
                        <Text>Ayam Goreng</Text>
                    </Button>
                    <Button rounded style={{ textAlign: 'left', marginTop: 20, width: '100%' }}
                        onPress={() => this.setState({ listOpen: true, list2: true })}
                    >
                        <Text>Ayam Bakar</Text>
                    </Button>
                    <Button rounded style={{ textAlign: 'left', marginTop: 20, width: '100%' }}
                        onPress={() => this.setState({ listOpen: true, list3: true })}
                    >
                        <Text block>Pepes Ayam </Text>
                    </Button>
                </Container>

            </Container>
        )
    }

    render() {
        return (
            <>
                {this.renderList()}
            </>
        )
    }

}