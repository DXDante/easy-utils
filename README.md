# easy-utils
一个辅助编码的小工具库


## 目录
- [前言](#前言)
- [安装](#安装)
- [示例](#示例)
- [文档](#文档)


## 前言
欢迎使用 easy-tools 系列工具之 utils


## 安装
使用 npm:
```bash
$ npm install easy-tools-utils -S
```

使用 pnpm:
```bash
$ pnpm add easy-tools-utils -S
```

使用 yarn:
```bash
$ yarn add easy-tools-utils -S
```


## 示例

```ts
import { getStorage, setStorage, removeStorage, clearStorage } from 'easy-tools-storage'
```


## 文档
**入参顺序为表顺序**

◆ **getStorage    获取 Storage(异步接口为 getStorageAsync)**
  |  参数  |  类型  |  必填  |  说明  |
  |:------|:------|:------|:-------------------------------|
  |type	  |String	|是     |本地存储类型 ('session' | 'local')|
  |key    |String	|是     |存储键名|


◆ **setStorage    设置 Storage(异步接口为 setStorageAsync, options 为配置对象)**
  |  参数  |  类型  |  必填  |  说明  |
  |:-------------------|:-----------|:------|:-------------------------------|
  |type	               |String	    |是     |本地存储类型 ('session' | 'local')|
  |key                 |String	    |是     |存储键名|
  |data                |unknown     |是     |存储数据|
  |options.expireTime  |Date|number |否     |过期时间|


◆ **removeStorage    移除 Storage(异步接口为 removeStorageAsync)**
  |  参数  |  类型  |  必填  |  说明  |
  |:------|:-------|:------|:-------------------------------|
  |type	  |String	 |是     |本地存储类型 ('session' | 'local')|
  |key    |String	 |是     |存储键名|


◆ **clearStorage    清空 Storage(异步接口为 clearStorageAsync)**
  |  参数  |  类型  |  必填  |  说明  |
  |:------|:-------|:------|:-------------------------------|
  |type	  |String	 |是     |本地存储类型 ('session' | 'local' | 'all')|
