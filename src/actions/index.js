export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const SELECT_HOST = 'SELECT_HOST'
export const FILTER_HOST = 'FILTER_HOST'
export const INVALIDATE_HOST = 'INVALIDATE_HOST'

export const selectReddit = hostName => ({
  type: SELECT_REDDIT,
  hostName
})

export const selectHost = hostName => {
  return {type: SELECT_HOST, hostName}
}

export const filterHosts = hostFilter => {
  return {type: FILTER_HOST, hostFilter}
}

export const invalidateHost = hostName => ({
  type: INVALIDATE_HOST,
  hostName
})

export const requestPosts = hostName => ({
  type: REQUEST_POSTS,
  hostName
})

export const receivePosts = (hostName, json) => ({
  type: RECEIVE_POSTS,
  hostName,
  posts: json,
  receivedAt: Date.now()
})

const fetchPosts = hostName => dispatch => {
  dispatch(requestPosts(hostName))
  return fetch(`http://localhost:3002/hosts`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'host='+hostName,
    credentials: 'same-origin',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(json => dispatch(receivePosts(hostName, json)))
}

const shouldFetchPosts = (state, hostName) => {
  const posts = state.postsByHost[hostName]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = hostName => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), hostName)) {
    return dispatch(fetchPosts(hostName))
  }
}
