/**
 * 表单相关
 */
import type { IValidateStringResult } from 'typings/index.d'
import type { ICharacterRegs, IfilterCharacters } from './index.d'
import { __isString, __isFunction } from 'core/base/index'


export const characterRegsMap: ICharacterRegs = new Map([
  ['chi', /[^\u4E00-\u9FA5]/g],
  ['num', /[^\d]/g],
  ['eng', /[^a-z]/gi],
  ['str', /[\u4E00-\u9FA5\da-z]/gi],
  ['chieng', /[^a-z\u4E00-\u9FA5]/gi],
  // [^\uFE30-\uFFA0] 中文字符
  ['chistr', /[\da-z]/gi],
  ['engstr', /[\u4E00-\u9FA5\d]/g],
  ['engnum', /[^\da-z]/gi],
  ['chiengnum', /[^\u4E00-\u9FA5\da-z]/gi],
  ['space', /\s/g]
])

/**
 * 字符串过滤指定保留的字符, 中文、英文、数组、符号, 按照对应的过滤类型 (常用于输入组件)
 * @param { String } type 指定过滤类型
 * @param { String } source 源数据
 * @param { Function } filter 回调函数
 * @return { String }
 */
export const __filterCharacters: IfilterCharacters = (type, source, filter) => {
  if (!(characterRegsMap.has(type)) || !__isString(source) || source === '') {
    return source
  }

  source = source.replace(characterRegsMap.get(type), '')

  if (__isFunction(filter)) {
    source = filter(source)
  }

  return source
}

/**
 * 验证手机号码
 * @param { String } resource 源数据
 * @return { Boolean }
 */
export const __isPhone: IValidateStringResult = (resource) => {
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(resource.toString())
}

/**
 * 验证电子邮箱格式
 * @param { String } resource 源数据
 * @return { Boolean }
 */
export const __isEmail: IValidateStringResult = (resource) => {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(resource.toString())
}

/**
 * 验证URL格式
 * @param { String } resource 源数据
 * @return { Boolean }
 */
export const __isUrl: IValidateStringResult = (value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value)
}