# 小程序开发模板

基于**taro/cli@next**脚手架，使用`mobx`, `react`, `Typescript`开发。

## 特性增加（强化）

- 完整描述`store`层的`ts`类型推导，请参照`src/store`目录的例子来写，可在需要引入`store`的地方获取到完整的提示。
- 增加`mobx-logger`，因为小程序开发者工具不支持安装`chrome插件`，所以`应用store`难以查看，数据修改路径难以跟踪。因此增加类似`redux-logger`的日志工具。
- 增加对`scss`文件的类型推导，引入样式文件后，可以获得样式文件中`className`的完美推导。
- 利用 TS 自动推导项目目录路径，无需手动书写`alias`解析路径，直接使用`src/`即可获取项目完整路径引入使用
- 封装了`Taro.request`网络请求方法，增加了响应和请求拦截器，提供`function post<T>() => Promise<T>`,`function get<T>() => Promise<T>`快捷方法，灵活使用返回值类型 T 可以获得更友好的接口返回值提示。

## 开发约定

### 关于 mobx

- 开启`strit`模式，数据修改必须经过`action`来操作，方便跟踪数据修改路径。
- `mobx-logger`的 log 有 Bug，如果通过 ES6 的结构获取到 `action`函数，然后直接调用，无法触发`action log`，所以有如下 2 种方式调用`action`

```js
// 方式1
const { countStore } = this.props;
countStore.increment();

// 方式2
this.props.countStore.increment();

// 无效的方式，触发不了action
const { increment } = this.props.countStore;
increment();
```

### 关于 css 方案

这里使用`css module`方案，请严格遵守。

> 注意，不要使用 scss.d.ts 中的 local 部分。

## 复用逻辑

### 页面级别复用状态

提供了通用 `model`层, 位置在`src/store/pages.ts`。页面级别的`store`可以继承该`model`类，将复用性数据和方法写在该位置。

#### 复用 page loading

- `pageInitRequest<T>(callback: Promise<T>)`，传入异步操作即可，需返回一个`Promise`。自动处理`pagesLoading`状态变化。
- `setPageLoading(status: boolean)`，提供手动操作`pageLoding`的方法
