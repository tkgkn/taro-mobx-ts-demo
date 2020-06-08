import { observable, action, runInAction } from 'mobx';
import { delay } from 'src/utils';
import { AtToastProps } from 'taro-ui/types/toast';

export type PageStatusType = {
  loading: boolean;
  error: boolean;
  toast: AtToastProps;
};

class PagesCommonStore {
  @observable pageStatus: PageStatusType = {
    loading: true,
    error: false,
    toast: {
      isOpened: false,
      text: '',
      icon: '',
      image: ''
    }
  };
  // @observable pageError = false

  @action.bound
  async pageInitRequest<T = any>(
    callback,
    showErrorPage: boolean = true
  ): Promise<T> {
    try {
      const res = await callback;
      await delay(500);
      runInAction(() => {
        this.setPageStatus({
          loading: false,
          error: false
        });
      });
      return res;
    } catch (error) {
      runInAction(() => {
        this.setPageStatus({
          loading: false,
          error: showErrorPage
        });
      });
      return Promise.reject(error);
    }
  }

  @action.bound
  setPageStatus(status: Partial<PageStatusType>) {
    this.pageStatus = {
      ...this.pageStatus,
      ...status
    };
  }
}

export default PagesCommonStore;
