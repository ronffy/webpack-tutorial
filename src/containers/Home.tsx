
import React, { SFC } from 'react';
import { connect, MapDispatchToProps, DispatchProp, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Collapse from '../components/Collapse';
import { RootState, Action } from '../config/types';
import { createRequestCollapse } from '../actions/home';

type OwnProps = {}

type StateProps = {
  collapseList: RootState['home']['collapseList']
}

interface DispatchProps extends DispatchProp<Action> {
  onRequestCollapse(id: string | number): void
}

type TThunkDispatch<E> = ThunkDispatch<RootState, E, Action>


type Props = DispatchProps & StateProps & OwnProps

const Home: SFC<Props> = ({ collapseList, onRequestCollapse }) => {

  const handleClick = () => {
    onRequestCollapse && onRequestCollapse(3);
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
  onRequestCollapse(id: number | string) {
    (dispatch as TThunkDispatch<typeof id>)(createRequestCollapse(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
