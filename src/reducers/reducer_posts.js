import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST: 
            const deletedState = Object.assign({},state)
            delete deletedState[action.payload];
            return deletedState;
        case FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state }
            newState[post.id] = post;
            return newState;
            // can shorten above to one line as follows:
            //return {...state, [action.payload.data.id]: action.payload.data};
          
        case FETCH_POSTS:
            //console.log(action.payload.data); // array of post objects from api
            return _.mapKeys(action.payload.data, 'id');        

        default:
            return state;
    }       

}