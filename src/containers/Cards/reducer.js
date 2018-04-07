import { fromJS } from 'immutable';
import {
  FETCH_CATS,
  NEXT_CAT
} from './constants'

const initialState = fromJS({
  list: [],
  loading: true,
});

function cardsReducer(state = initialState, {
  type,
  payload = []
}) {
  console.log(type)
  let list = null
  switch (type) {
    case `${FETCH_CATS}_PENDING`:
      list = state.get('list')
      return state.set('loading', !list.size)
    case `${FETCH_CATS}_FULFILLED`:
      list = state.get('list').concat(fromJS(payload))
      return state.merge({
        list,
        loading: false
      });
    case NEXT_CAT:
      list = state.get('list').slice(1)
      return state.set('list', list)
    default:
      return state;
  }
}

export default cardsReducer;
