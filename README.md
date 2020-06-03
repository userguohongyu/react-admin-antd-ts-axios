# 初学react，从零到一搭建一个简易版admin框架，此文主要记录下搭建过程及遇见的问题，如果有人使用那更好了😁

此项目是用ant.design种的ts模板加react-router-dom、axios、react-redux集成的，并在其中引入了scss

# 搭建流程

## 一、下载ts模板、引入antd
![截图](https://github.com/userguohongyu/img-md/blob/master/imageBox/1.png)
![截图](https://github.com/userguohongyu/img-md/blob/master/imageBox/2.png)
![截图](https://github.com/userguohongyu/img-md/blob/master/imageBox/3.png)

项目使用了 <Layout /> 组件，在layout.tsx里面，layout中引入了自定义的header，footer同理也可自定义

## 二、引入scss
不需要改配置之类的，直接把css替换成scss就能嵌套使用

npm install node-sass sass-loader --save
or
yarn add node-sass sass-loader --save

![截图](https://github.com/userguohongyu/img-md/blob/master/imageBox/4.png)

## 二、引入路由（ react-router-dom 跟 react-router-config ）
代码里只有react-router-dom的这种写法，react-router-config自行查阅

npm install react-router-dom --save
or
yarn add react-router-dom --save

思想就是在app.tsx里面引入路由，路由挂载layout页面与login页面（也可挂载其他的同级页面。如404）。
注：Router->index.tsx中的Switch是匹配路径用的，不加的话login和layout会同时出现

## 三、引入react-redux（ 请查看store及HomePage的计数器例子 ）
npm install react-redux –save
or
yarn add react-redux –save

创建store文件夹->index与reducer


## 四、引入axios，封装拦截器响应器 （相关代码在src->api->login、src->utils-request）
npm install axios –save
or
yarn add axios –save



