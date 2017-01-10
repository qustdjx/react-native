/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { AppRegistry,ScrollView,Text, View,ViewPagerAndroid,StyleSheet,Image } from 'react-native';

import ImageDemo from './demo/ImageDemo';
import LocalImage from './demo/LocalImage';
import PropsTest from './demo/PropsTest';
import StateTest from './demo/StateTest'
import ListViewTest from './demo/ListViewTest'


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class AwesomeProject extends Component {


    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let pic2 = require('./demo/img/6.jpg');
        return (
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                    <ImageDemo/>
                    <LocalImage/>
                    <PropsTest url={pic2}/>
                    <View>
                        <StateTest text='I love to blink' />
                        <StateTest text='Yes blinking is so great' />
                        <StateTest text='Why did they ever take this out of HTML' />
                        <StateTest text='Look at me look at me look at me' />
                    </View>
                </View>
                  <ListViewTest/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    pageStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        position:'relative',
    },
    image: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:50,
    },
    button1:{
        width:200,
        alignSelf: 'flex-end',
        justifyContent:'flex-end',
    },
    messageText: {
        fontSize: 27,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
        alignSelf:'center',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);