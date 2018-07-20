import { wxRequest } from './request.js';
const apiMall = "https://mini.zsylife.cn/zilong/";
const getData = params => wxRequest(params, `${apiMall}api.php`);
const getUserInfo = params => wxRequest(params, `${apiMall}user_info`);
const Login = params => wxRequest(params, `${apiMall}login`);
export default {
  getData,
  getUserInfo,
  Login,
}