# 小程序开发模板

基于**taro/cli@next**脚手架，使用`mobx`, `react`, `Typescript`开发。

## 特性增加（强化）

- 完整描述`store`层的`ts`类型推导，请参照`src/store`目录的例子来写，可在需要引入`store`的地方获取到完整的提示。
- 增加`mobx-logger`，因为小程序开发者工具不支持安装`chrome插件`，所以`应用store`难以查看，数据修改路径难以跟踪。因此增加类似`redux-logger`的日志工具。
- 增加对`xxx.module.scss`文件的类型推导，引入样式文件后，可以获得样式文件中`className`的完美推导。
  > **注意**： 有时生成不了`d.ts`文件，是因为新创建的`scss`文件并未被使用的关系，必须确保文件是被使用，才会去编译，不然不会生成`d.ts`
- 利用 TS 自动推导项目目录路径，无需手动书写`alias`解析路径，直接使用`src/`即可获取项目完整路径引入使用
- 封装了`Taro.request`网络请求方法，增加了响应和请求拦截器，提供`function post<T>() => Promise<T>`,`function get<T>() => Promise<T>`快捷方法，灵活使用返回值类型 T 可以获得更友好的接口返回值提示。

后面有特性优化，或者 Bug 修复，参见最下方的**优化记录**

## 开发约定

### 关于本地开发提效

请在开发者工具的【详情】-【本地设置】中，开启**自定义处理命令**，在预览自定义命令添加`npm run compress`。配合`gulp`提高本地开发效率。具体看更新日志 6.28 号的。

### 关于 mobx

state 层统一放置到`src/store`目录，需跟页面名称一一对应。

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

通用逻辑 model 层，请放置在`src/store/commone`下。
页面公用组件放置在`src/pages/common`下。

模板提供了通用 `model`层, 位置在`src/store/common/pages.ts`。页面级别的`store`可以继承该`model`类，将复用性数据和方法写在该位置。

### 通用页面加载状态，Toast

已更新为**修饰器语法**，见下面的更新记录。

~~需要配合`pages/common/pageStatus`组件，在页面中引入该组件，放在每个页面中`render`的最后即可，需要接收整个`PagesCommonStore`状态对象。如下：~~

- `setPageStatus(status: boolean)`，提供手动操作`loading, error, toast`的方法。

### 页面初始化接口方法

页面首次加载时调用的接口可以使用下面的方法进行使用。

- `pageInitRequest<T>(callback: Promise<T>)`，传入异步操作即可，需返回一个`Promise`。自动处理`pagesLoading`状态变化。

# 优化、bug 修复记录

## 2020/06/02

- 增加`baseUrl`的自定义配置，在`request`中取修改最终的`url`。用户也可自定义其他配置，自有组合，模板这里只设置了`baseUrl`
- 增加一个自定义`plugin`-**CopyPlugin**，可以实现简单的复制文件或文件夹到目标目录。解决场景，比如开发平台模板会用到`ext.json`实现不同小程序的一些定制化需求，本地开发时，不需要引入该文件，`Taro`自身不会将该文件放到`dist`目录里。插件放在了`pluings/`下。

## 2020/06/08

- 升级至`taro@3.0.0 rc3`。相应的修改了`plugins`写法和引入。
- `dev`和`prod`下，编译的`scss`样式文件不一致，比如多行文本省略号用到的`-webkit-box-orient`属性，`prod`下丢失。升级至`3.0.0 rc3`版本正常。
- 优化通用`pages`状态，增加`toast`控制（每个页面大概率肯定会有 toast），相应的需要配合一个基本的`pageStatus`组件，因为微信无法做到全局组件调用，自带的全局 toast 方法局限性较大。
- 引入`taro-ui@next`版本（包会变大，用户自己选择）

## 2020/06/14

- 原通用页面加载状态，Toast 已经更新为修饰器语法。使用方式如下`@pageStatusHoc(pageStoreType)`，接受一个参数，指定当前页面组件的页面状态用的是哪个 store，具备`TS`提示功能，列举了仅仅是页面级别的`store`的键名，如果有其他非页面级`store`，自己可以在`src/store/index.ts`中配置。

## 2020/06/28

- 使用`gulp`和微信开发者工具的自定义命令功能，优化本地开发包大小的问题。因为预览小程序限制 2mb 大小，虽然可以开启`NODE_ENV=production`的方式，编译阶段就压缩代码，但是编译速度由于压缩会被拖慢很多，添加一行`console`编译都要 3 到 4s，严重影响开发效率。
- 更新到`rc-6`版本

## 2020/06/29

- `gulp`流程增加处理图片的任务。

# 声明

个人业务中提炼的项目模板，可能会有 Bug 和不完善的地方，欢迎提 issure。
