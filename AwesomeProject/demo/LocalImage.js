/**
 * Created by Jason on 2017/1/6.
 * Abstract: the componet of local images
 */

import React, { Component } from 'react';
import { Image,View } from 'react-native';

export default class LocalImage extends Component {
    render() {

        return (
            <View style={{alignItems: 'center'}}>
            <Image source={require('./img/2.jpg')} style={{width: 250, height: 250}} />
            </View>
        );
    }
}