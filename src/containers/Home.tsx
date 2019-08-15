
import React, { SFC } from 'react';
import { connect, MapDispatchToProps, DispatchProp, MapStateToProps } from 'react-redux';
import Collapse from '../components/Collapse';
import { RootState, Action } from '../config/types';

type OwnProps = {}

type StateProps = {
  collapseList: RootState['home']['collapseList']
}

interface DispatchProps extends DispatchProp<Action> {
  onRequestCollapseList(): void
}

type Props = DispatchProps & StateProps & OwnProps

const Home: SFC<Props> = ({ collapseList, onRequestCollapseList }) => {

  const handleClick = () => {
    onRequestCollapseList && onRequestCollapseList();
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
  onRequestCollapseList() {
    dispatch({
      type: 'updateState',
      payload: {
        collapseList: [
          {
            id: 1,
            title: '折叠面板标题1',
            content: '折叠面板内容1',
          },
          {
            id: 2,
            title: '折叠面板标题2',
            content: '折叠面板内容2',
          }
        ]
      }
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
