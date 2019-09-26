import React, { ComponentType } from 'react';

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error) {
    console.error('组件报错了:', error);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', fontSize: 11 }}>有些组件出小差了</div>
    }
    return this.props.children
  }
}

export function withErrorBoundary<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  )
}

export default ErrorBoundary;
