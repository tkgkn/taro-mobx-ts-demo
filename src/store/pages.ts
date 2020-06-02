import { observable, action, runInAction } from 'mobx';

class PagesCommonStore {
  @observable pageLoading = true;

  @action.bound
  async pageInitRequest<T = any>(callback): Promise<T> {
    try {
      const res = await callback;
      return res;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      runInAction(() => {
        this.pageLoading = false;
      });
    }
  }

  @action.bound
  setPageLoading(status: boolean) {
    this.pageLoading = status;
  }
}

export default PagesCommonStore;
