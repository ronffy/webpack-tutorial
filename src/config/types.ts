import { 
  CSSProperties, 
  ReactNode, 
  MouseEventHandler, 
  InputHTMLAttributes,
} from 'react';
import { RootState } from '../reducers';

export type OnClick<T = HTMLDivElement> = MouseEventHandler<T>;

export type OnDoubleClick<T = HTMLDivElement> = MouseEventHandler<T>;

export type OnSelect<T = HTMLDivElement> = MouseEventHandler<T>;

export type NodeProps<T = HTMLDivElement> = Partial<{
  children: ReactNode;
  style: CSSProperties;
  className: string;
  onClick: OnClick<T>;
  onDoubleClick: OnDoubleClick<T>;
  onSelect: OnSelect<T>;
}>

export interface InputProps<T = HTMLInputElement> extends InputHTMLAttributes<T> {}

export type RootState = RootState;

