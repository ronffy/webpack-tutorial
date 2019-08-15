
import React, { SFC } from 'react';
import { connect, MapDispatchToProps, DispatchProp, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Collapse from '../components/Collapse';
import { RootState, Action } from '../config/types';
import { createRequestCollapse } from '../actions/home';

type OwnProps = {}

type StateProps = {
  loading: RootState['home']['loading']
  collapseList: RootState['home']['collapseList']
}

interface DispatchProps extends DispatchProp<Action> {
  onRequestCollapse(id: string | number): void
}

type TThunkDispatch<E> = ThunkDispatch<RootState, E, Action>


type Props = DispatchProps & StateProps & OwnProps

const Home: SFC<Props> = ({ collapseList, onRequestCollapse, loading }) => {

  const handleClick = () => {
    onRequestCollapse && onRequestCollapse(3);
  }
  return (
    <>
      <div onClick={handleClick}>点我加载折叠板</div>
      {
        loading
          ? <div>loading</div>
          : <Collapse list={collapseList} />
      }
    </>
  )
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({ home }) => ({
  collapseList: home.collapseList,
  loading: home.loading,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
  dispatch,
  async onRequestCollapse(id: number | string) {
    dispatch(createRequestCollapse.loading(true));
    await (dispatch as TThunkDispatch<typeof id>)(createRequestCollapse(id));
    dispatch(createRequestCollapse.loading(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
