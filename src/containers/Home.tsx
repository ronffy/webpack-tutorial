
import React, { SFC } from 'react';
import { connect, MapDispatchToProps, DispatchProp, MapStateToProps } from 'react-redux';
import Collapse from '../components/Collapse';
import { RootState, Action } from '../config/types';
import { createRequestCollapse } from '../actions/home';

type OwnProps = {}

type StateProps = {
  collapseList: RootState['home']['collapseList']
}

interface DispatchProps extends DispatchProp<Action> {
  createRequestCollapse(id: string | number): void
}

type Props = DispatchProps & StateProps & OwnProps

const Home: SFC<Props> = ({ collapseList, createRequestCollapse }) => {

  const handleClick = () => {
    createRequestCollapse && createRequestCollapse(3);
  }
  return (
    <>
      <div onClick={handleClick}>点我加载折叠板</div>
      <Collapse
        list={collapseList}
      />
    </>
  )
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({ home }) => ({
  collapseList: home.collapseList
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
  dispatch,
  createRequestCollapse(id: number | string) {
    createRequestCollapse(id)(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
