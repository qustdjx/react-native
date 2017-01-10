/**
 * Created by Jason on 2017/1/6.
 * Abstract: image demo
 */
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ImageDemo extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}