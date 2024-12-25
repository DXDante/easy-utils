/**
 * 函数节流声明
 * @public
 */
export interface IThrottle {
  <T extends Function>(handler: T, time?: number): (this: unknown, ...args: unknown[]) => void
}

/**
 * 函数防抖声明
 * @public
 */
export interface IDebounce extends IThrottle {}