import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './constants';

const initialState = {
  data: [],
  loading: false,
  error: null
};

function dataReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_BEGIN:
    return {
      loading: true
    }

    case FETCH_SUCCESS:
    console.log('success', action.payload)
    return {
      data: action.payload.data,
      loading: false
    };

    case FETCH_FAILURE:
    return {
      loading: false,
      error: '404 Posts Not Found'
    }

    default:
    return state;

  }
}

export default dataReducer;