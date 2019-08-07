import React from 'react';
import Button from '../Button';

const initState = {
  count: 0
}

type State = Readonly<typeof initState>;

class ButtonCounter extends React.Component<any, State> {
  readonly state: State = initState;

  render() {
    const { count } = this.state;

    return (
      <div>
        <Button onClick={this.handleIncrement}>加</Button>
        <Button onClick={this.handleDecrement}>减</Button>
        <div>
          计数值是: {count}.
        </div>
      </div>
    )
  }

  private handleIncrement = () => {
    this.setState(incrementCount);
  }

  private handleDecrement = () => {
    this.setState(decrementCount);
  }

}


const incrementCount = (prevState: State) => ({
  count: prevState.count + 1
});

const decrementCount = (prevState: State) => ({
  count: prevState.count - 1
});

export default ButtonCounter;
