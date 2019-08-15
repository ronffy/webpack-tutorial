import React from 'react';
import isFunction from '../../utils/isFunction';

const initState = {
  show: false
};

type State = Readonly<typeof initState>

type Props = Partial<{
  children: RenderCallback
  render: RenderCallback
}>

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element

export type ToggleableComponentProps = {
  show: State['show']
  toggle: Toggleable['toggle']
}

class Toggleable extends React.Component<Props, State> {
  readonly state: State = initState;

  render() {
    const { show } = this.state;
    const { render, children } = this.props;
    const renderProps = {
      show,
      toggle: this.toggle
    }

    if (render) {
      return render(renderProps);
    }

    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = () => {
    this.setState(updateStateShow);
  }
}


const updateStateShow = (prevState: State) => ({
  show: !prevState.show
});

export default Toggleable;
