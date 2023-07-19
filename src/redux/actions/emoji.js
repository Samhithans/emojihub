export const GET_EMOJI_DATA = "GET_EMOJI_DATA";
export const GET_EMOJI_DATA_SUCCESS = "GET_EMOJI_DATA_SUCCESS";
export const GET_EMOJI_DATA_FAILED = "GET_EMOJI_DATA_FAILED";

export function getEmojiData() {
  return { type: GET_EMOJI_DATA };
}

export function getEmojiDataSuccess(payload) {
  return { type: GET_EMOJI_DATA_SUCCESS, payload };
}

export function getEmojiDataFailed() {
  return { type: GET_EMOJI_DATA_FAILED };
}
