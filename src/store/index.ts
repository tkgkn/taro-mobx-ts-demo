import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';

import CounterStore from './counter';
import TestStore from './test';

// 修改store必须使用action
configure({
  enforceActions: 'always'
});

// mobx 日志
enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true
});

// 顶层store
class Store {
  counterStore = new CounterStore();
  testStore = new TestStore();
}

const StoreIns = new Store();

// 导出每个store的类型
export type StoreType = typeof StoreIns;
export type CounterStoreType = typeof StoreIns.counterStore;
export type TestStoreType = typeof StoreIns.testStore;

export default StoreIns;
