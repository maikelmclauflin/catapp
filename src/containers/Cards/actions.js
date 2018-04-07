import {
  retrieve as retrieveCats,
  vote
} from 'services'
import {
  FETCH_CATS,
  CAT_OK,
  CAT_JERK,
  NEXT_CAT,
} from './constants'
export const fetchCats = () => ({
  type: FETCH_CATS,
  payload: retrieveCats()
})
export const catOk = (userId, imageId) => ({
  type: CAT_OK,
  payload: vote(userId, imageId, 10)
})
export const catJerk = (userId, imageId) => ({
  type: CAT_JERK,
  payload: vote(userId, imageId, 1)
})
export const nextCat = () => (dispatch, getState) => {
  dispatch({ type: NEXT_CAT })
  const state = getState()
  const cards = state.get('cards').get('list')
  if (cards.size < 3) {
    dispatch(fetchCats())
  }
}