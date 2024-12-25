import type { IThrottle, IDebounce } from './index.d'
import { __isFunction } from 'core/base'

/**
 * 简易函数节流
 * @param { Function } handler 节流的函数(如果在处理器里需使用 this 关键词, 请使用声明式函数)
 * @param { Number } time 节流时间, 间隔时间执行一次处理器(单位 ms)
 */
export const __throttle: IThrottle = (handler, time = 1000) => {
  if (!__isFunction(handler)) {
    throw new Error('in __throttle, first argument must be function')
  }

  let timer: null | number = null
  let isFirst: boolean = true

  return function (...args) {
    if (isFirst) {
      handler.apply(this, args)
      isFirst = false
      return
    }

    if (timer) return

    timer = setTimeout(() => {
      handler.apply(this, args)
      clearTimeout(timer)
      timer = null
    }, time)
  }
}

/**
 * 简易函数防抖
 * @param { Function } handler 防抖的函数
 * @param { Number } time 防抖时间 (单位 ms)
 */
export const __debounce: IDebounce = (handler, time = 1000) => {
  if (!__isFunction(handler)) {
    throw new Error('in __debounce, first argument must be Function')
  }

  let timer: null | number = null

  return function(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      handler.apply(this, args)
      timer = null
    }, time)
  }
}