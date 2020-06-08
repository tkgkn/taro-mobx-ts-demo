/* eslint-disable import/no-commonjs */
const fse = require('fs-extra');
const path = require('path');

// class CopyPlugin {
//   constructor(options) {
//     this.from = options.from;
//     this.to = options.to;
//     this.files = options.files;
//     if (!Array.isArray(this.files)) {
//       this.files = [];
//     }
//     this.copyErr = [];
//   }

//   apply(builder) {
//     builder.hooks.beforeBuild.tap('CopyPlugin', () => {
//       this.copyFile(this.files);
//     });
//   }

//   copyFile(fileOrDir) {
//     fileOrDir.forEach(async file => {
//       try {
//         const originFilePath = path.join(this.from, file);
//         const targetFilePath = path.join(this.to, file);
//         const stat = await fse.stat(originFilePath);
//         const isFile = stat.isFile();
//         if (isFile) {
//           // 直接搬运
//           fse.copyFile(originFilePath, targetFilePath);
//         } else {
//           // 创建目标文件夹
//           await fse.ensureDir(targetFilePath);
//           // 读取源目录的文件列表
//           const files = await fse.readdir(originFilePath);
//           // 文件列表加上文件夹名称
//           const newFiles = files.map(filePath => {
//             return `${file}/${filePath}`;
//           });
//           // 进入文件夹继续递归
//           this.copyFile(newFiles);
//         }
//       } catch (error) {
//         console.log(error);
//         this.copyErr.push(error);
//       }
//     });
//   }
// }

function CopyPlugin(ctx, pluginOpts) {
  this.from = pluginOpts.from;
  this.to = pluginOpts.to;
  this.files = pluginOpts.files;
  if (!Array.isArray(this.files)) {
    this.files = [];
  }
  this.copyErr = [];

  ctx.onBuildStart(() => {
    copyFile(this.files);
  });

  function copyFile(fileOrDir) {
    fileOrDir.forEach(async file => {
      try {
        const originFilePath = path.join(this.from, file);
        const targetFilePath = path.join(this.to, file);
        const stat = await fse.stat(originFilePath);
        const isFile = stat.isFile();
        if (isFile) {
          // 直接搬运
          fse.copyFile(originFilePath, targetFilePath);
        } else {
          // 创建目标文件夹
          await fse.ensureDir(targetFilePath);
          // 读取源目录的文件列表
          const files = await fse.readdir(originFilePath);
          // 文件列表加上文件夹名称
          const newFiles = files.map(filePath => {
            return `${file}/${filePath}`;
          });
          // 进入文件夹继续递归
          this.copyFile(newFiles);
        }
      } catch (error) {
        console.log(error);
        this.copyErr.push(error);
      }
    });
  }
}

module.exports = CopyPlugin;
