/**
 * 获取浏览器内核信息 - 入参声明
 * @public
 */
export type IGetBrowserInfoParamType = 'versions' | 'language'

/**
 * 获取浏览器内核信息 - 版本返回声明
 * @public
 */
export interface IBrowserInfoVersionsResult {
  trident: boolean,
  presto: boolean,
  webKit: boolean,
  gecko: boolean,
  mobile: boolean,
  ios: boolean,
  android: boolean,
  iPhone: boolean,
  iPad: boolean,
  webApp: boolean
}

/**
 * 获取浏览器内核信息 - 合并版本、语言返回声明
 * @public
 */
export type IBrowserInfoMergeResult = { versions: IBrowserInfoVersionsResult, language: string }

/**
 * 获取浏览器内核信息声明
 * @public
 */
export interface IGetBrowserInfo {
  (mode?: IGetBrowserInfoParamType): IBrowserInfoVersionsResult | string | IBrowserInfoMergeResult
}

export type IGetBrowserEnvResult =  'pc' | 'wx' | 'wxwork' | 'sina' | 'qq' | 'ios' | 'android' | ''

/**
 * 获取移动设备浏览器平台类型声明
 * @public
 */
export interface IGetBrowserEnv {
  (): IGetBrowserEnvResult
}