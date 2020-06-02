import { createStore } from 'redux';
import reducer from './reducer'; // 相当于仓库管理员

const store = createStore(reducer); // 创建仓库放入管理员

export default store;