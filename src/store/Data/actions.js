import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './constants';
import { fetchDataURL } from 'api/api.js'
import { Fetcher } from 'api/Fetcher'

const fetchData = () => dispatch => {
  dispatch(fetchBegin());
  return Fetcher.get(fetchDataURL())
  .then(json => dispatch(fetchSuccess(json.data)))
  .catch(error => dispatch(fetchFailure(error)));
}

const fetchBegin = () => ({
  type: FETCH_BEGIN
})

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: { data }
})

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
})

export { fetchData }