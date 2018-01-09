import { combineReducers } from 'redux';
import {
  SELECT_HOST, INVALIDATE_HOST, FILTER_HOST,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions';
import {
  GET_HOSTS
} from '../actions/host-actions';

const selectHost = (state = 'dev1', action) => {
  const host = action.hostName || null;
  switch (action.type) {
    case SELECT_HOST:
      return host;
    default:
      return state;
  }
};

const filteredHosts = (state = '', action) => {
  const host = action.hostFilter || null;
  switch (action.type) {
    case FILTER_HOST:
      return host;
    default:
      return state;
  }
};

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
  hosts: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_HOST:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.lastUpdated
      };
    default:
      return state;
  }
};

const postsByHost = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_HOST:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.hostName]: posts(state[action.hostName], action)
      };
    default:
      return state;
  }
};

const getSocketHosts = (state = { hosts: [] }, action) => {
  switch (action.type) {
    case GET_HOSTS:
      return {
        ...state,
        hosts: action.hosts
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getSocketHosts,
  postsByHost,
  selectHost,
  filteredHosts
});

export default rootReducer;
