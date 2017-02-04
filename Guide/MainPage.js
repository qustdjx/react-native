 /**
 *MainPage
 * @author:lidong
 * @date：2016-02-28
 */
'use strict';
import React,{ Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    Navigator,
    TouchableOpacity,
    ToastAndroid,
    WebView,
    View
} from 'react-native';


import MyHealth from './MyHealth';
import HealthTools from './HealthTools';
import HealthSQ  from './HealthSQ';
import MyAccount  from './MyAccount';
import TabNavigator from 'react-native-tab-navigator';
import TopScreen  from './TopScreen';
import NetUitl from './app/net/NetUitl';

 const MY_HEALTH = '我的健康';
 const MY_HEALTH_NORMAL = require('./image/my_health_un.png');
 const MY_HEALTH_FOCUS = require('./image/my_health_on.png');
 const MY_HEALTH_CONSULT = '健康百科';
 const MY_HEALTH_CONSULT_NORMAL = require('./image/my_health_consult_un.png');
 const MY_HEALTH_CONSULT_FOCUS = require('./image/my_health_consult_on.png');
 const MY_HEALTH_TOOLS = '健康工具';
 const MY_HEALTH_TOOLS_NORMAL = require('./image/my_health_tool_un.png');
 const MY_HEALTH_TOOLS_FOCUS = require('./image/my_health_tool_on.png');
 const MY_HEALTH_COMMUNITY = '健康社区';
 const MY_HEALTH_COMMUNITY_NORMAL = require('./image/my_health_community_un.png');
 const MY_HEALTH_COMMUNITY_FOCUS = require('./image/my_health_community_on.png');
 const MY_HEALTH_ACCOUNT = '我的账号';
 const MY_HEALTH_ACCOUNT_NORMAL = require('./image/my_account_un.png');
 const MY_HEALTH_ACCOUNT_FOCUS = require('./image/my_account_on.png');

 const SHOP_INDEX='首页';
 const SHOP_INDEX_TAB_NORMAL=require('./image/tabs/home_normal.png');
 const SHOP_INDEX_TAB_FOCUS=require('./image/tabs/home_focus.png');
 const SHOP_WEI_TAO='微淘';
 const SHOP_WEI_TAO_TAB_NORMAL=require('./image/tabs/cart_normal.png');
 const SHOP_WEI_TAO_TAB_FOCUS=require('./image/tabs/cart_focus.png');
 const SHOP_DISCOVER='发现';
 const SHOP_DISCOVER_TAB_NORMAL=require('./image/tabs/faxian_normal.png');
 const SHOP_DISCOVER_TAB_FOCUS=require('./image/tabs/faxian_focus.png');
 const SHOP_CART='购物车';
 const SHOP_CART_TAB_NORMAL=require('./image/tabs/cart_normal.png');
 const SHOP_CART_TAB_FOCUS=require('./image/tabs/cart_focus.png');
 const SHOP_ME='我的商场';
 const SHOP_ME_TAB_NORMAL=require('./image/tabs/personal_normal.png');
 const SHOP_ME_TAB_FOCUS=require('./image/tabs/personal_focus.png');

 class MainPage extends Component {

     constructor(props) {
         super(props);
         this.state = {selectedTab: SHOP_INDEX,
             tabBarShow:true};
         this._renderTabItem =  this._renderTabItem.bind(this);
     }
     /**
      *img ；默认图标
      *selectedImg：选中的图标
      *tag：标题
      *childView：子控件
      */
     _renderTabItem(img, selectedImg, tag, childView) {
         return (
             <TabNavigator.Item
                 selected={this.state.selectedTab === tag}
                 renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                 title={tag}
                 renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                 onPress={() => this.setState({ selectedTab: tag })}>
                 {childView}
             </TabNavigator.Item>
         );
     }


     _createChildView1(tag) {
         let renderView;
         switch (tag) {
             case MY_HEALTH:
                 renderView = <MyHealth />;
                 break;
             case MY_HEALTH_CONSULT:
                 renderView = <TopScreen />;
                 break;
             case MY_HEALTH_TOOLS:
                 renderView = <HealthTools />;
                 break;
             case MY_HEALTH_COMMUNITY:
                 renderView = <HealthSQ />;
                 break;
             case MY_HEALTH_ACCOUNT:
                 renderView = <MyAccount />;
                 break;
             default:
                 break;
         }
         return (<View style={styles.container}>{renderView}</View>)
     }

     static _createChildView(tag) {
         return (
             <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:22}}>{tag}</Text>
             </View>
         )
     }

     render(){
         let {tabBarShow} = this.state;
         console.log(tabBarShow);
         // let sx = 'dddd';
         // let url='http://127.0.0.1:9012/ReactNativeApi/getGuideImage';
         // function _getData(set)
         // {
         //     console.log(set);
         //     return set;
         // }
         // NetUitl.postFrom(url,sx,_getData);
         return (
             <View style={{flex: 1}}>
                 <TabNavigator hidesTabTouch={true}
                               sceneStyle={{paddingBottom: 0}}
                               tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}
                               overflow={'hidden'} >
                     {this._renderTabItem(MY_HEALTH_NORMAL, MY_HEALTH_FOCUS, MY_HEALTH,this._createChildView1(MY_HEALTH))}
                     {this._renderTabItem(MY_HEALTH_CONSULT_NORMAL, MY_HEALTH_CONSULT_FOCUS, MY_HEALTH_CONSULT, this._createChildView1(MY_HEALTH_CONSULT))}
                     {this._renderTabItem(MY_HEALTH_TOOLS_NORMAL, MY_HEALTH_TOOLS_FOCUS, MY_HEALTH_TOOLS, this._createChildView1(MY_HEALTH_TOOLS))}
                     {this._renderTabItem(MY_HEALTH_COMMUNITY_NORMAL, MY_HEALTH_COMMUNITY_FOCUS, MY_HEALTH_COMMUNITY, this._createChildView1(MY_HEALTH_COMMUNITY))}
                     {this._renderTabItem(MY_HEALTH_ACCOUNT_NORMAL, MY_HEALTH_ACCOUNT_FOCUS, MY_HEALTH_ACCOUNT,this._createChildView1(MY_HEALTH_ACCOUNT))}
                 </TabNavigator>
             </View >
         );
     }
 }



 const styles = StyleSheet.create({
     container: {
         flex: 1
     },
     tabNav: {
         height: 60,
         backgroundColor: '#FFF',
         alignItems: 'center',
         borderTopWidth: 0.5,
         borderTopColor: '#E8E8E8'
     },
     tabNavHide: {
         position: 'absolute',
         top: Dimensions.get('window').height,
         height: 0
     },
     webview_style:{
         backgroundColor:'#00ff00',
     },
     tab: {
         height: 60,
         backgroundColor: '#303030',
         alignItems: 'center',
     },
     tabIcon: {
         width: 30,
         height: 30,
         resizeMode: 'stretch',
         marginTop: 12.5
     },

 });
module.exports = MainPage;
