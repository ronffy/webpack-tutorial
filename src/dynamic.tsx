import React, { ComponentType } from 'react';

type Opts = {
  hoc?(C: ComponentType<any>): ComponentType<any>
  loading?: ComponentType<any>
}
type State = {
  AsyncComponent: ComponentType<any> | null
}

export default function dynamic(resolve, opts: Opts = {}) {
  const { loading: LoadingComponent = () => null, hoc = C => C } = opts;

  return class DynamicComponent extends React.Component<any, State> {
    _mounted: boolean
    state: State
    LoadingComponent: ComponentType<any>

    constructor(props) {
      super(props);
      this.LoadingComponent = LoadingComponent;
      this.state = {
        AsyncComponent: null
      };

      this.load();
    }

    load() {
      resolve()
        .then(c => {
          const AsyncComponent = c.default || c;
          if (this._mounted) {
            this.setState({
              AsyncComponent
            });
          } else {
            this.state.AsyncComponent = AsyncComponent;
          };
        })
        .catch(() => { })
    }

    componentDidMount() {
      this._mounted = true;
    }
    componentWillUnmount() {
      this._mounted = false;
    }

    render() {
      const { AsyncComponent } = this.state;
      if (AsyncComponent) {
        const Component = hoc(AsyncComponent);
        return <Component {...this.props} />
      } else {
        return <LoadingComponent {...this.props} />
      }
    }
  }
}