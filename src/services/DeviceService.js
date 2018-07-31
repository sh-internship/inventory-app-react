import client from './AxiosClientService';

import DeviceModel from '../models/DeviceModel';
import DevicesStore from '../stores/DevicesStore';

class DeviceService {
  /**
   * Download all devices list
  */
  getAllDevices() {
    client.get('/api/devices')
      .then(result => {
        result.data.forEach(element => {
          const device = new DeviceModel(result.data);
          DevicesStore.addNewDevice(device);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default new DeviceService();