import React, { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { inject } from 'mobx-react';
import { CounterStoreType, TestStoreType } from 'src/store';
import pageStatusHoc from 'src/pages/common/pageStatus/pageStatusHoc';
// import request from 'src/utils/request';

import styles from './index.module.scss';

@inject('counterStore', 'testStore')
@pageStatusHoc('counterStore')
class Index extends Component<{
  counterStore: CounterStoreType;
  testStore: TestStoreType;
}> {
  componentWillMount() {
    this.props.counterStore.getList();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    onReachBottomDistance: 50
  };

  onReachBottom() {
    console.log('触发onReachBottom');
  }

  increment = () => {
    this.props.counterStore.increment();
  };

  decrement = () => {
    this.props.counterStore.decrement();
  };

  incrementAsync = () => {
    this.props.counterStore.incrementAsync();
  };

  render() {
    const { counter } = this.props.counterStore;
    const { name } = this.props.testStore;
    return (
      <View className={styles.index}>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Button
          onClick={() => {
            this.props.testStore.name = '违规操作试试';
          }}
        >
          不使用action修改store
        </Button>
        <Text>{counter}</Text>
        <Text>{name}</Text>
        <View
          style={{
            height: 900
          }}
        >
          一个撑高度的盒子
        </View>
      </View>
    );
  }
}

export default Index;
