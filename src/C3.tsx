import React from 'react';
import { NodeProps, InputProps } from './types';

interface Iprops extends NodeProps {
  name: string;
}
function C1(props: Iprops) {
  const { name, children, onClick } = props;
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
      {children}
    </div>
  )
}

function C2(props: InputProps) {
  const { onChange, value, placeholder } = props;
  return <input onChange={onChange} value={value} placeholder={placeholder} />
}

interface Istate3 {
  c1Visible: boolean;
  c2Value: string;
}

class C3 extends React.Component<any, Istate3> {
  state: Istate3 = {
    c1Visible: true,
    c2Value: ''
  }

  handleClick = (e: React.MouseEvent) => {
    console.log('onClick', e);
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let c1Visible: boolean;
    let value = e.target.value;

    if (value === 'hidden') {
      c1Visible = false;
    } else {
      c1Visible = true;
    }

    type ChangeState = Pick<Istate3, 'c2Value'>;
    let changeState: ChangeState = {
      c2Value: value
    }
    if (c1Visible !== this.state.c1Visible) {
      (changeState as Istate3).c1Visible = c1Visible;
    }
    this.setState(changeState);
  }
  render() {
    const { c1Visible, c2Value } = this.state;
    return (
      <div>
        {
          c1Visible
            ? (
              <C1 name="ronffy" onClick={this.handleClick} >
                <span>hahahahah</span>
              </C1>
            )
            : null
        }
        <C2
          name="ronffy"
          onChange={this.handleChange}
          value={c2Value}
          placeholder="输入 hidden 试试"
        />
      </div>
    )
  }
}

export default C3
