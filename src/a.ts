import doIt from './utils/doIt'

export function f1(sign: string) {
  return 'xxx' + sign
}



export function f2(sign: string) {
  return 'yyy' + doIt(sign)
}