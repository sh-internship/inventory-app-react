import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Select } from 'antd';
import { Icon, Flex, WhiteSpace, List } from 'antd-mobile';
import 'antd/dist/antd.css';
import { bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import './places.style.css';
import NavBarView from '../../components/navigation/navBar.view';



@inject('placesStore', 'officesStore')
@observer
class PlacesView extends Component {

  @observable filterOfficeId;
  @observable office;
  @observable placeList = [];
  @observable officeList = [];

  async componentDidMount() {
    this.officeList = await this.props.officesStore.getAllOffices();
    this.placeList = await this.props.placesStore.getAllPlaces();
  }

  @bind
  handlePlacesFilter = (optionValue) => {
    this.filterOfficeId = optionValue;
    this.office = this.props.officesStore.officesList.find((office) => office.id === optionValue);
  }

  render() {
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Places" />
          <WhiteSpace />
          <Flex justify="center" className="title-container">
            <Flex.Item>
              Offices
          </Flex.Item>
            <Link to='/places/add'>
              <Icon type="cross" className="cross" />
            </Link>
          </Flex>
          <div>
            <WhiteSpace />
            <Select
              placeholder="Select office"
              style={{ width: `100%` }}
              onChange={this.handlePlacesFilter}>
              {
                this.officeList.map(office => {
                  return (
                    <Select.Option key={office.id} value={office.id}>{office.name}</Select.Option>
                  )
                })
              }
            </Select>
          </div>
        </div>
        <div>
          <Flex>
            <List className="places-list">
              {
                this.placeList
                  .filter((place) => place.officeId === this.filterOfficeId)
                  .map((place) => {
                    return (
                      <Link key={place.id + 1} to={`/places/${place.id}`}>
                        <List.Item
                          key={place.id}
                          arrow="horizontal"
                        >{place.name}
                          <List.Item.Brief key={place.id} >
                            {this.office.name}
                          </List.Item.Brief>
                        </List.Item>
                      </Link>
                    )
                  })
              }
            </List>
          </Flex>
        </div>
      </div>
    )
  }
};

export default PlacesView;
