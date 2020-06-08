declare namespace PageStatusModuleScssModule {
  export interface IPageStatusModuleScss {
    'page-status-wrap': string;
    'page-status-wrap-toast': string;
    'pages-status-error-text': string;
    'pages-status-error-wrap': string;
  }
}

declare const PageStatusModuleScssModule: PageStatusModuleScssModule.IPageStatusModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageStatusModuleScssModule.IPageStatusModuleScss;
};

export = PageStatusModuleScssModule;
