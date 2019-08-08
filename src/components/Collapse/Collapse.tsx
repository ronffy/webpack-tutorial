import React, { ReactNode } from 'react';
import CollapseItem, { Props as CollapseItemProps } from './CollapseItem';

interface Item {
  id: string | number,
  title: CollapseItemProps['title'],
  content: ReactNode,
}

interface Props {
  menu: Item[]
}

const Collapse = ({ menu }: Props) => (
  <>
    {menu.map(({ id, title, content }) => (
      <React.Fragment key={id}>
        <CollapseItem title={title}>{content}</CollapseItem>
      </React.Fragment>
    ))}
  </>
)

export default Collapse;
