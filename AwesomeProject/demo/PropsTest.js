/**
 * Created by Jason on 2017/1/6.
 * Abstract:
 */
import React, { Component } from 'react';
import { Image,View } from 'react-native';

export default class PropsTest extends Component {
    render() {

        return (
            <View style={{alignItems: 'center'}}>
                <Image source={this.props.url} style={{width: 250, height: 250}} />
            </View>
        );
    }
}