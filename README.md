# webpack核心基础配置

### 什么是webpack?
> webpack是模块打包机:它做的事情是分析你的项目结构，找到javasript模块以及其他一些浏览器不能直接运行的拓展语言(sass,Typescript等)，将其找到转换和打包为合适的格式供浏览器使用。在3.0出现后webpack还肩负起了优化的责任

这段话有三个重点:

- 打包：把多个javascript文件打包成一个，减少服务器压力和下载贷款
- 转换：把拓展语言转换成普通的javascript,让浏览器顺利运行
- 优化：随着前端观察越来越复杂，webpack也肩负起了优化和提升性能的责任

### 安装webpack
> webpack官方推荐的安装方式是在项目局部安装，通过node的npm安装

```
# 首先创建项目并进入项目
mkdir webpack_demo
cd webpack_demo
# 初始化npm
npm init
#安装webpack
npm install webpack --save-dev
```
<<<<<<< HEAD

### 用webpack打包
> 最简单粗暴的打包方式是直接在命令行输入对应的指令和指定的文件进行转换，因为考虑到实际项目中完全用不到这种方式，就直接略过。在项目根目录下新建webpack.config.js文件，webpack相对应的操作就全部写入该文件

##### webpack.config.js基本结构
```
module.exports = {
    //入口文件的配置项
    entry:{},
    //出口文件的配置项
    output:{},
    //loaders，webpack的核心功能
    module:{},
    //插件，用于生产模板和各项功能
    plugins:[],
    //配置webpack开发服务功能更
    devServer:{}
}
```
=======
>>>>>>> 048091061511c8830e85bf88be064b33967a8a7e
