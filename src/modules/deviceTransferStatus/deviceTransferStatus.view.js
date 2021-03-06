import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './deviceTransferStatusStyle.css';
import { Bind } from 'lodash-decorators';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore','layoutStore')
@observer
class DeviceTransferStatus extends React.Component {
  @observable device = {};

  componentDidMount() {   
    reaction(
      () => this.props.devicesStore.devicesList,
      () => {
        let  id = this.props.match.params.id;
        this.device = this.props.devicesStore.findDeviceById(id);       
      }
    );
  }
  @Bind()
  backToMyDevices(){
    this.props.history.push(`/devices`);
  }
  render() {
      return (

        <Flex direction="column" align="stretch" className="full-height">
            <NavBar
              rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
              My Devices
            </NavBar>
        <Flex.Item align="center">
              <div>MESSAGE HERE(SUCCESSFUL)</div>
          </Flex.Item>
          <Flex.Item align="center" className="bold-text">
              <div>{this.device.name}</div>
          </Flex.Item>
          <Flex.Item align="left">
              <div>TO: </div>
          </Flex.Item>
          <Flex.Item align="center" className="bold-text">
              <div>PERSON NAME</div>
          </Flex.Item>
          <Flex>
        <Flex.Item>
          <Button type="primary" onClick={this.backToMyDevices}>Back to Devices</Button>      
        </Flex.Item>
      </Flex>
    </Flex> 

      )
  }
}


export default DeviceTransferStatus;