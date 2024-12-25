/**
 * 值条件判定
 * @public
 */
export interface IJudgmentApi {
  (): boolean
}

/**
 * 值条件带参数判定
 * @public
 */
export interface IJudgmentArgApi {
  (source: unknown): boolean
}

/**
 * 泛型验证结果声明
 * @public
 */
export interface IValidateResult<T> {
  (resource: T): boolean
}

/**
 * 字符串验证结果声明
 * @public
 */
export interface IValidateStringResult extends IValidateResult<string> {}

/**
 * 数字验证结果声明
 * @public
 */
export interface IValidateNumberResult extends IValidateResult<number> {}





/**
 * @public
 * Storage 存储方式简化
 */
export type storageType = 'session' | 'local'

/**
 * @public
 * 检查参数入参
 */
export interface ICheckParams {
  type: storageType
  key?: string
  data?: unknown,
  filterFields?: string[]
}

/**
 * @public
 * 异步获取 Storage
 */
export interface IGetStorageAsync extends IGetStorage {
  <T>(type: storageType, key: string): Promise<T | null>
}

/**
 * @public
 * 同步获取 Storage 接口声明
 */
export declare const getStorage: IGetStorage

export type *  from '../core/base/index'
export type *  from '../core/browser/index'