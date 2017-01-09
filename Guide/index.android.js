/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * HelloWorld1 Native App
 * https://github.com/facebook/react-native
 * @author:lidong
 * @date：2016-02-28
 */
'use strict';
import React,{ Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid,
    ViewPagerAndroid,
    Image,
    View
} from 'react-native';


class NavButton extends React.Component {

    render() {
        return (
            <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
    <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableHighlight>
    );
    }
}

class Guide extends Component {

    render(){
        return (
            <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
            <View style={styles.pageStyle} >
    <Image source={require('./img/p1.png')}
        style={styles.image}
    />
    </View>
        <View style={styles.pageStyle}>
    <Image source={require('./img/p2.png')}
        style={styles.image}
    />
    </View>
        <View style={styles.pageStyle}>
    <Image source={require('./img/p3.png')}
        style={styles.image} >
    <NavButton
        onPress={() => {
            ToastAndroid.show('启动应用', ToastAndroid.SHORT);

        }}
        text="启动应用"
        style={styles.button1}  />
    </Image>
        </View>
        </ViewPagerAndroid>
    );
    }
};

//React Native组件的生命周期，经历了Mount->Update->Unmount这三个大的过程，即从创建到销毁的过程

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

AppRegistry.registerComponent('Guide', () => Guide);
