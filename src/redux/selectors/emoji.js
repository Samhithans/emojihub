const area=(state) => state.emoji;
//state => state.emoji.emojiReducer.data
export function selectEmojiData(state) {
    return area(state).emojiReducer.data;
}