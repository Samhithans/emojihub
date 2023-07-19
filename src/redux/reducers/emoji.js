import  {GET_EMOJI_DATA, GET_EMOJI_DATA_SUCCESS,GET_EMOJI_DATA_FAILED} from '../actions/emoji';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function emojiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMOJI_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_EMOJI_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case GET_EMOJI_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        data: null,
      };
    default:
      return state;
  }
}
