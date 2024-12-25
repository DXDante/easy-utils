import type { IJudgmentArgApi } from 'typings/index.d'

/**
 * 是否为 Array
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isArray: IJudgmentArgApi = source => {
  return Array.isArray(source)
}

/**
 * 是否为空 Array
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isEmptyArray: IJudgmentArgApi = source => {
  return __isArray(source) && (source as Array<unknown>).length === 0
}

/**
 * 是否为 Function
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isFunction: IJudgmentArgApi = source => {
  return typeof source === 'function' && source.constructor === Function
}

/**
 * 是否为普通 Object
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isObject: IJudgmentArgApi = source => {
  return typeof source === 'object' && source !== null && source.constructor === Object
}

/**
 * 是否为普通空 Object
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isEmptyObject: IJudgmentArgApi = source => {
  return __isObject(source) && Object.keys(source).length === 0
}

/**
 * 是否为 String
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isString: IJudgmentArgApi = source => {
  return typeof source === 'string'
}

/**
 * 是否为 Number
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isNumber: IJudgmentArgApi = source => {
  return typeof source === 'number'
}

/**
 * 是否为 Boolean
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isBoolean: IJudgmentArgApi = source => {
  return typeof source === 'boolean'
}

/**
 * 是否为 null
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isNull: IJudgmentArgApi = source => {
  return source === null
}

/**
 * 是否为 undefined
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isUndefined: IJudgmentArgApi = source => {
  return source === undefined
}

/**
 * 是否为字符串纯数字 (可转换的字符串数据)
 * @param { unknown } source 数据源
 * @return { boolean } 返回 boolean
 */
export const __isStringNumber: IJudgmentArgApi = source => {
  return typeof source === 'string' && !isNaN(Number(source))
}