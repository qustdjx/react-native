/**
 * Created by Jason on 2017/1/7.
 * Abstract:
 */
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import NetUitl from './NetUitl';

export default class ListViewTest extends Component {
    // 初始化模拟数据
    constructor(props) {

        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row1','row2'])
        };
    }
    render() {

        let params = {'start':'0',limit:'20','isNeedCategory': true, 'lastRefreshTime': '2016-09-25 09:45:12'};
        NetUitl.post('http://framework.hy.chinamidwife.com/AdApi/bannerTypeList',params,{'Accept': 'application/json', 'Content-Type': 'application/json'},function (set) {
            //下面的就是请求来的数据
            let list=[]
            console.log(set)
            for(item of set.list)
            {
                console.log(item)
                list.push(item.id+'--'+item.banner_type_name)
            }
            console.log(list)

        })

        return (
            <View style={{flex: 1,alignItems: 'center', paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}