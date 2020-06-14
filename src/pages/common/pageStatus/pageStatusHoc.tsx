import React from 'react';
import { View, Text } from '@tarojs/components';
import { AtLoadMore, AtIcon, AtToast } from 'taro-ui';
import { PageStatusType } from 'src/store/common/pages';
import { classnames } from 'src/utils';
import { PageStoresType } from 'src/store';

import styles from './pageStatus.module.scss';

/* 该组件在每个pages页面引用，可以控制页面加载状态，出错状态，以及toast公用 */

function PageStatusComp(props: PageStatusType) {
  const { toast, loading, error } = props;
  const pageStatusClass = classnames({
    [styles['page-status-wrap']]: true,
    [styles['page-status-wrap-toast']]: !loading && !error
  });
  return (
    <View className={pageStatusClass}>
      <AtToast {...toast} />
      {loading && <AtLoadMore status="loading" loadingText="加载中，请稍后" />}
      {error && (
        <View className={styles['pages-status-error-wrap']}>
          <AtIcon value="subtract-circle" size="30" color="#e5243e" />
          <Text className={styles['pages-status-error-text']}>
            页面加载失败，请联系管理员
          </Text>
        </View>
      )}
    </View>
  );
}

const pageStatusHoc = (pageStoreType: string) => (
  WrappedComp: React.ComponentType
): any =>
  class extends React.Component {
    render() {
      const curPageStore = this.props[pageStoreType] as PageStoresType;
      const { pageStatus } = curPageStore;
      return (
        <View>
          <WrappedComp {...this.props}></WrappedComp>
          <PageStatusComp {...pageStatus} />
        </View>
      );
    }
  };

export default pageStatusHoc;
