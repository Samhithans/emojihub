import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEmojiData} from './redux/actions/emoji';
import {emojiSelectors} from './redux/selectors/index';
import  EmojiListPage from './components/emojiListPage'
function App() {
  
  const emojiList = useSelector(emojiSelectors.selectEmojiData);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmojiData());
  },[dispatch]);
  //console.log(emojiList);
  return (
    <div className="App">
      <EmojiListPage emojiData={emojiList}/>
    </div>
  );
}

export default App;
