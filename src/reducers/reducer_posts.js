import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log(action.payload.data); // array of post objects from api
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}