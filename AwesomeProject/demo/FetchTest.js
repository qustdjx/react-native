/**
 * Created by Jason on 2017/1/7.
 * Abstract:
 */
import React, { Component } from 'react';
import { Image,View } from 'react-native';

export default class PropsTest extends Component {


    render() {

        fetch('http://framework.hy.chinamidwife.com/AdApi/bannerTypeList', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
            return (
                <Text>Hello world!</Text>
            );

    }
}