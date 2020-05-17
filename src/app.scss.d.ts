declare namespace AppScssModule {
  export interface IAppScss {
    file: string;
    mappings: string;
    names: string;
    sources: string;
    version: string;
  }
}

declare const AppScssModule: AppScssModule.IAppScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppScssModule.IAppScss;
};

export = AppScssModule;
