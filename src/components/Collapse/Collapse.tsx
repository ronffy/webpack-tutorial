import React from 'react';
import CollapseItem, { Props as ItemBaseProps } from './CollapseItem';

type ItemProps = ItemBaseProps & {
  id: string | number;
}

interface Props {
  menu: ItemProps[]
}

const Collapse = ({ menu }: Props) => (
  <>
    {menu.map(({ id, title, content }) => (
      <React.Fragment key={id}>
        <CollapseItem title={title} content={content} />
      </React.Fragment>
    ))}
  </>
)

export default Collapse;
