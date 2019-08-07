import { 
  CSSProperties, 
  ReactNode, 
  MouseEventHandler, 
  InputHTMLAttributes,
} from 'react';

export interface NodeProps<T = HTMLDivElement> {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<T>;
  onDoubleClick?: MouseEventHandler<T>;
  onSelect?: MouseEventHandler<T>;
}

export interface InputProps<T = HTMLInputElement> extends InputHTMLAttributes<T> {}
