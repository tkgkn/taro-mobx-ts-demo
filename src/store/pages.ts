import { observable, action, runInAction } from 'mobx';

class PagesCommonStore {
  @observable pageLoading = true;

  @action.bound
  async pageInitRequest<T = any>(callback): Promise<T> {
    try {
      const res = await callback;
      runInAction(() => {
        this.pageLoading = false;
      });
      return res;
    } catch (error) {
      runInAction(() => {
        this.pageLoading = false;
      });
      return Promise.reject(error);
    }
  }

  @action.bound
  setPageLoading(status: boolean) {
    this.pageLoading = status;
  }
}

export default PagesCommonStore;
