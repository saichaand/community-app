/**
 * Redux Reducer for state.page
 *
 * Description:
 *  Implements reducer factory for the state.page segment of Redux state; and
 *  combines it with the child state.page.x reducer factories.
 */

import { combineReducers } from 'redux';
import { resolveReducers } from 'utils/redux';

import submission, {
  factory as challengeDetailsFactory,
} from './submission';


import challengeDetails from './challenge-details';
import communities from './communities';
import dashboard from './dashboard';

import hallOfFame, { factory as hallOfFameFactory } from './hallOfFame';
import reviewOpportunityDetails from './review-opportunity-details';
import sandbox from './sandbox';

/**
 * Reducer factory.
 * @param {Object} req ExpressJS HTTP Request.
 * @return {Function} Reducer.
 */
export function factory(req) {
  return resolveReducers({
    submission: challengeDetailsFactory(req),
    hallOfFame: hallOfFameFactory(req),
  }).then(reducers => combineReducers({
    ...reducers,
    challengeDetails,
    communities,
    dashboard,
    reviewOpportunityDetails,
    sandbox,
  }));
}

export default combineReducers({
  challengeDetails,
  communities,
  dashboard,
  hallOfFame,
  reviewOpportunityDetails,
  submission,
  sandbox,
});
