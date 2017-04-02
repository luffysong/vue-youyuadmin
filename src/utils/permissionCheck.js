/* eslint-disable */
import store from '../store/index';

export default function (permissionArr) {
  let status = false;
  // if (store.state.permission.permissionSelf.my_permissions.super) {
  //   status = true;
  // } else {
    permissionArr.forEach((el) => {
      if (store.state.permission.permissionSelf.my_permissions[el]) {
        status = true;
      }
    });
  // }
  console.log(status, 'status, check');
  return status;
}
