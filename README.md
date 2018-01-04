# webpack核心基础配置

### 什么是webpack?
> webpack是模块打包机:它做的事情是分析你的项目结构，找到javasript模块以及其他一些浏览器不能直接运行的拓展语言(sass,Typescript等)，将其找到转换和打包为合适的格式供浏览器使用。在3.0出现后webpack还肩负起了优化的责任

这段话有三个重点:

- 打包：把多个javascript文件打包成一个，减少服务器压力和下载贷款
- 转换：把拓展语言转换成普通的javascript,让浏览器顺利运行
- 优化：随着前端观察越来越复杂，webpack也肩负起了优化和提升性能的责任

### 安装webpack
> webpack官方推荐的安装方式是在项目局部安装，通过node的npm安装

```
# 首先创建项目并进入项目
mkdir webpack_demo
cd webpack_demo
# 初始化npm
npm init
#安装webpack
npm install webpack --save-dev
```
