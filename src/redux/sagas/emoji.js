import { call, put, takeLatest,all, takeEvery } from 'redux-saga/effects'
import getEmojiData from '../../services/emoji';
import {GET_EMOJI_DATA, getEmojiDataFailed, getEmojiDataSuccess} from '../actions/emoji';

function* loadEmojiData() {
    try{
        let emojiData = yield call(() => fetch('https://emojihub.yurace.pro/api/all'));
        const formattedemojis = yield emojiData.json();
        yield put(getEmojiDataSuccess(formattedemojis));
    }
    catch(error){
        yield put(getEmojiDataFailed());
    }
}; 

export default function* emojiSagas() {
    yield takeEvery(GET_EMOJI_DATA, loadEmojiData)
} 