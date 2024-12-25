/**
 * 浏览器专属相关
 */

import type { IJudgmentApi } from 'typings/index.d'
import type { IGetBrowserInfo, IBrowserInfoVersionsResult, IGetBrowserEnv } from './index.d'

/**
 * 是否为移动端环境
 */
export const __isMobile: IJudgmentApi = () => {
  if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true
  }
  return false
}

/**
 * 获取浏览器内核信息 (浏览器专用)
 * @param mode 获取相关数据 ('versions' / 'language' / 没有参数则全部返回)
 */
export const __getBrowserInfo: IGetBrowserInfo = (mode) => {
  const versions = (() => {
    const u = window.navigator.userAgent

    // 浏览器版本信息
    return {
      trident: u.includes('Trident'), // IE 内核
      presto: u.includes('Presto'), // opera 内核
      webKit: u.includes('AppleWebKit'), // 苹果、谷歌内核
      gecko: u.includes('Gecko') && !u.includes('KHTML'), // 火狐内核
      mobile: __isMobile(), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // IOS 终端
      android: u.includes('Android') || u.includes('Linux'), // Android 终端/UC 浏览器
      iPhone: u.includes('iPhone'), // 是否为 iPhone 或者 QQHD 浏览器
      iPad: u.includes('iPad'), // 是否iPad
      webApp: u.includes('Safari') // 是否 WEB 应该程序, 没有头部与底部
    }
  })()

  const language = window.navigator.language

  return mode == 'versions' ? versions : mode == 'language' ? language : { versions, language }
}

/**
 * 获取移动设备浏览器平台类型 (浏览器专用, 更新中)
 */
export const __getBrowserEnv: IGetBrowserEnv = () => {
  const browserKernel = __getBrowserInfo('versions')

  if (!(browserKernel as IBrowserInfoVersionsResult).mobile) {
    return 'pc'
  }

  const u = window.navigator.userAgent.toLowerCase()
  // 微信
  if (u.match(/MicroMessenger/i)) {
    return 'wx'
  }
  // 企业微信
  if (u.match(/wxwork/i)) {
    return 'wxwork'
  }
  // 新浪微博客户端
  if (u.match(/WeiBo/i)) {
    return 'sina'
  }
  // QQ 空间
  if (u.match(/QQ/i)) {
    return 'qq'
  }
  // IOS 浏览器
  if ((browserKernel as IBrowserInfoVersionsResult).ios) {
    return 'ios'
  }
  // Android 浏览器
  if ((browserKernel as IBrowserInfoVersionsResult).android) {
    return 'android'
  }

  return ''
}