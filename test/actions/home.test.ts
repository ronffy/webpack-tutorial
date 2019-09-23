
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import nock from 'nock';
import { createRequestCollapse } from '../../src/actions/home';
import apis from '../../src/config/apis';
import store from '../../src/store';


const middlewares = [reduxThunk];
const mockStore = configureMockStore(middlewares);

describe('test actions home', () => {

  test('test createRequestCollapse.loading', () => {
    const loading = false;
    const expectedAction = {
      type: 'home/updateState',
      payload: {
        loading
      }
    };
    expect(createRequestCollapse.loading(loading))
    .toEqual(expectedAction);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('test createRequestCollapse async action', () => {
    const id = 3;
    nock(apis.origin)
      .get(apis.api1)
      .query({
        id
      }).reply(200, {
        status: 200,
        statusText: '',
        data: {
          data: [{
            id: 1,
            title: 'xxx',
            content: 'xxx',
          }],
          code: 0,
          message: ''
        }
      });

      const expectedActions = [
        {
          type: 'home/updateState',
          payload: {
            collapseList: [{
              id: 1,
              title: 'xxx',
              content: 'xxx',
            }]
          }
        }
      ];

      const sotre = mockStore();

    return store.dispatch((createRequestCollapse(id) as any))
    .then(() => {
      
      expect(sotre.getActions()).toEqual(expectedActions);

    })

    
  })
});