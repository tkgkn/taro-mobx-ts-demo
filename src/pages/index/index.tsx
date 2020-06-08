import React, { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';
import { CounterStoreType, TestStoreType } from 'src/store';
import PageStatus from 'src/pages/common/pageStatus/pageStatus';
// import request from 'src/utils/request';

import styles from './index.module.scss';

@inject('counterStore', 'testStore')
@observer
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
          违规操作
        </Button>
        <Text>{counter}</Text>
        <Text>{name}</Text>
        <PageStatus {...this.props.counterStore.pageStatus} />
      </View>
    );
  }
}

export default Index;
