import React, { ReactNode, SFC } from 'react';
import Panel, { Props as PanelProps } from './Panel';

interface Item {
  id: string | number,
  title: PanelProps['title'],
  content: ReactNode,
}

interface Props {
  menu: Item[]
}

const Collapse: SFC<Props> = ({ menu }: Props) => (
  <>
    {menu.map(({ id, title, content }) => (
      <React.Fragment key={id}>
        <Panel title={title}>{content}</Panel>
      </React.Fragment>
    ))}
  </>
)

export default Collapse;
