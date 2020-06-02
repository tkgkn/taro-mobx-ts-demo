import Taro from '@tarojs/taro';

interface OptionalRequestParams extends Partial<Taro.RequestParams> {
  url: string;
}

type PartialRequestParams = Partial<Taro.RequestParams>;

type CustomConfig = {
  baseUrl?: string;
};

interface customRequestParams extends Taro.RequestParams {
  [key: string]: any;
}

type requestInterceptor = {
  resolved: (config) => Promise<customRequestParams>;
  reject?: (error) => Promise<Error>;
};

type responseInterceptor = {
  resolved: (res) => Promise<any>;
  reject?: (error) => Promise<Error>;
};

type interceptor = requestInterceptor | responseInterceptor;

class TaroRequest {
  defaultTaroRequestConfig: PartialRequestParams;

  runConfig: Taro.RequestParams;

  customConfig: CustomConfig;

  promiseChain: interceptor[];

  constructor(config?: PartialRequestParams) {
    this.defaultTaroRequestConfig = {
      ...{
        dataType: 'json',
        responseType: 'text',
        header: {}
      },
      ...config
    };
    this.promiseChain = [
      {
        resolved: this.request
      }
    ];
    this.customConfig = {};
  }

  request = async () => {
    const { baseUrl } = this.customConfig;
    return await Taro.request({
      ...this.runConfig,
      url: baseUrl + this.runConfig.url
    });
  };

  run = async <T>() => {
    const copyPromiseChain = this.promiseChain.slice();
    let promise: Promise<T | Taro.RequestParams> = Promise.resolve(
      this.runConfig
    );
    while (copyPromiseChain.length) {
      const { resolved, reject } = copyPromiseChain.shift() as interceptor;
      promise = promise.then(resolved, reject);
    }
    return promise;
  };

  post = async <T>(params: string | OptionalRequestParams, data?: any) => {
    const config: Taro.RequestParams = {
      ...this.defaultTaroRequestConfig,
      ...(typeof params === 'string' ? { url: params, data } : params),
      method: 'POST'
    };
    this.runConfig = config;
    return this.run<T>();
  };

  get = async <T>(params: string | OptionalRequestParams, data?: any) => {
    const config: Taro.RequestParams = {
      ...this.defaultTaroRequestConfig,
      ...(typeof params === 'string' ? { url: params, data } : params),
      method: 'GET'
    };
    this.runConfig = config;
    return this.run<T>();
  };

  requestInterceptor = (
    resolved: (config: Taro.RequestParams) => Promise<customRequestParams>,
    reject?: (error) => Promise<Error>
  ) => {
    this.promiseChain.unshift({
      resolved,
      reject
    });
  };

  responseInterceptor = (
    resolved: (res: Taro.request.SuccessCallbackResult) => Promise<any>,
    reject?: (error) => Promise<Error>
  ) => {
    this.promiseChain.push({
      resolved,
      reject
    });
  };
}

const TaroRequestInstance = new TaroRequest();

/* 请求拦截器 */
TaroRequestInstance.requestInterceptor(function(config) {
  if (config.header) {
    config.header['content-type'] =
      'application/x-www-form-urlencoded;charset=utf-8';
  }
  // 编写设置baseUrl的逻辑
  if (TaroRequestInstance.customConfig.baseUrl === undefined) {
    TaroRequestInstance.customConfig.baseUrl = 'http://wthrcdn.etouch.cn';
  }
  return Promise.resolve(config);
});

/* 响应拦截器 */
// 这块基于实际业务接口，处理res

const SUCCESS = 1000;
const AUTH_EXPIRED = '-10040';
const NOT_LOGIN = '-10010';

interface apiDataType {
  status: typeof SUCCESS | typeof AUTH_EXPIRED | typeof NOT_LOGIN;
  data: any;
  desc: string;
}

function handleRes(res: Taro.request.SuccessCallbackResult<apiDataType>) {
  const { errMsg, statusCode, data } = res;

  // 判断Taro.request是否正常
  if (errMsg !== 'request:ok' || statusCode !== 200) {
    return Promise.reject(new Error(errMsg || '网络异常请重试'));
  }

  // 判断业务接口状态
  const { status, data: result, desc } = data;
  if (status === SUCCESS && desc === 'OK') {
    return result;
  } else {
    return Promise.reject(new Error('接口调用出错'));
  }
}

TaroRequestInstance.responseInterceptor(handleRes, err => {
  return Promise.reject(err);
});

export default TaroRequestInstance;
