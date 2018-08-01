import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import UserModel from '../../models/UserModel';
import DeviceModel from '../../models/DeviceModel';
import DevicesStore from '../../stores/DevicesStore';
import { NavBar, Icon, Flex, Button, WhiteSpace, List } from 'antd-mobile';
import index from '../../stores';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore')
@observer
class MyDevices extends React.Component {
    render() {
      const { devicesStore } = this.props;
      return (
        <div>
          <Flex.Item>
               <NavBar
                   rightContent={<Icon type="ellipsis"/>}className="devices-navbar">
                   My Devices
               </NavBar>
          </Flex.Item>
            {devicesStore.devicesList.map(e =>{
          return (
          <Flex.Item key={e.id}>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
                {e.name}
                <Brief>{e.id}</Brief>
              </Item>
          </Flex.Item>
          )
        })}
          </div>
      );
    }
}

export default  MyDevices;



