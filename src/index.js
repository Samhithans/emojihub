import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import reducers from './redux/reducers';
import emojiSagas from './redux/sagas/emoji';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    emoji: reducers
  },
  middleware: [saga]
});  
saga.run(emojiSagas);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);

