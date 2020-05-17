declare namespace IndexModuleScssModule {
  export interface IIndexModuleScss {
    index: string;
  }
}

declare const IndexModuleScssModule: IndexModuleScssModule.IIndexModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleScssModule.IIndexModuleScss;
};

export = IndexModuleScssModule;
