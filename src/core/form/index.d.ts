export type ICharacterRegs = Map<string, RegExp>

/**
 * 字符串过滤指定保留的字符声明
 * @public
 */
export interface IfilterCharacters {
  (type: string, source: string, filter?: (source: string) => string)
}
