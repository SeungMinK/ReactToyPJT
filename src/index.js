import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import{BrowserRouter} from 'react-router-dom';//라우터를 사용하기위해 라이브러리에서 import
//BrowserRouter , hashRouter 두가지가있음
//차이점은 경로에 '#'으로 표시되냐 안되냐의 차이
//주소창에 바로 경로를 사용할 경우, 서버에게 잘못 요청 할 수있어서 #을 붙히면 서버에 전송되지않음 즉, hashRouter 가 더 안전함

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
