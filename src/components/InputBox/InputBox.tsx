import React from 'react';
import Input from './Input';
import Text from './Text';

const initState = {
  textVisible: true,
  inputValue: ''
}

type State = Readonly<typeof initState>;

class InputBox extends React.Component<any, State> {
  readonly state: State = initState;

  handleClick = (e: React.MouseEvent) => {
    console.log('onClick', e);
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let textVisible: State['textVisible'];
    let value = e.target.value;

    if (value === 'hidden') {
      textVisible = false;
    } else {
      textVisible = true;
    }

    type ChangeState = Pick<State, 'inputValue'>;
    let changeState: ChangeState = {
      inputValue: value
    }
    if (textVisible !== this.state.textVisible) {
      (changeState as typeof initState).textVisible = textVisible;
    }
    this.setState(changeState);
  }
  render() {
    const { textVisible, inputValue } = this.state;
    return (
      <div>
        {
          textVisible
            ? (
              <Text
                name="ronffy"
                onClick={this.handleClick}
              >
                <span>hahahahah</span>
              </Text>
            )
            : null
        }
        <Input
          onChange={this.handleChange}
          value={inputValue}
          placeholder="输入 hidden 试试"
        />
      </div>
    )
  }
}

export default InputBox
