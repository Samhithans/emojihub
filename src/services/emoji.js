import axios from 'axios';

async function getEmojiData() {
    const res = await axios.get(`https://emojihub.yurace.pro/api/all`);
    return res;    
}

export default getEmojiData;
