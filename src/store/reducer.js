/**
 * Combine all reducers in this file and export the combined reducers.
 */

// import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
// import { LOCATION_CHANGE } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form/immutable';
import { LOGOUT_USER_REQUEST } from 'constants';

import globalReducer from 'containers/App/reducer';
import cardsReducer from 'containers/Cards/reducer';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
// const routeInitialState = fromJS({
//   location: null,
//   match: null,
// });
// const emptyObject = fromJS({});

/**
 * Merge route into the global application state
 */
// function routeReducer(state = routeInitialState, { type, payload }) {
//   switch (type) {
//     /* istanbul ignore next */
//     case LOCATION_CHANGE:
//       return state.setIn(['ui', 'dropdown', 'open'], emptyObject);
//     default:
//       return state;
//   }
// }

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  const composite = combineReducers({
    // route: routeReducer,
    global: globalReducer,
    cards: cardsReducer,
    // language: languageProviderReducer,
    // form: formReducer,
    // ...injectedReducers,
  });

  return rootReducer;

  function rootReducer(state_, action) {
    let state = state_;
    if (action.type === LOGOUT_USER_REQUEST) {
      state = null;
    }
    return composite(state, action);
  }
}
