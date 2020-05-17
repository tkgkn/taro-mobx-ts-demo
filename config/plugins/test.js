class BuildPlugin {
  apply(builder) {
    builder.hooks.beforeBuild.tap('BuildPlugin', config => {
      console.log(config);
    });

    builder.hooks.afterBuild.tap('BuildPlugin', stats => {
      console.log(stats);
    });
  }
}

module.exports = BuildPlugin;
