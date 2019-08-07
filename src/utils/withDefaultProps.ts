/**
 * 给组件指定属性的默认值，实现原理是 TS 的条件类型映射
 */
import { ComponentType } from 'react';

export default function withDefaultProps<
  P extends object,
  DP extends Partial<P> = Partial<P>
>
  (defaultProps: DP, Comp: ComponentType<P>) {
  // 提取出必须的属性
  type RequireProps = Omit<P, keyof DP>;

  // 重新创建属性定义，将有默认值的属性标记为可选的，没有默认值的属性标记为必选的
  type Props = Partial<DP> & Required<RequireProps>;

  Comp.defaultProps = defaultProps;

  // 返回重新定义属性类型的组件，通过将原始组件的类型检查关闭，然后再设置正确的属性类型
  return (Comp as ComponentType<any>) as ComponentType<Props>;
}

