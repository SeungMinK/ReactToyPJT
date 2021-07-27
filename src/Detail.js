import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';//useHistroy를 훅이라고 부름
import styled from 'styled-components';
import './Detail.css'
import axios from 'axios';

let box = styled.div`
    padding : 20px;
    
`;
let titleBox = styled.h1`
  
    color : red;

`;

function Detail(p) {//모듈화

    let { id } = useParams();
    let history = useHistory();//이동햇던 방문기록을 저장해놓는 object
    let [Ui, UiChange] = useState(true);//UI Switch
    let [inputData, inputDataChange] = useState('');


    /*,[] 을 사용하면 useEffect()가 실행될 조건을 넣을 수 있음, 
   이렇게 코드 작성시,
   1. 컴포넌트가 로드 될때 한번
   2.Ui의 State가 변경될때만 실행됨
       * []를  주지 않을시 아무 State가 변경될때마다 실행됨
       * []안에 조건을 작성하지 않을시 페이지가 로드될때 1번만 실행되고 더 이상 실행되지 않음
   
   3. setTimeout() 함수 실행시, 지정된 시간보다 사용자가 먼저 페이지를 벗어날 경우 에러가 발생할 수 있음
       -> useEffect() 안에 return 부분은, 컴포넌트를 벗어날 경우 실행되는 코드임
       -> return에 clearTimeout()함수를 작성하여 페이지를 벗어날 경우 timmer도 종료시켜줘야함 
   */
    useEffect(() => {

        let timmer = setTimeout(() => { UiChange(false) }, 2000);
        console.log('useEffect실행');
        return () => { clearTimeout(timmer) }//
    }, [Ui]);



    return (
        <div>
            <div className='red'>Detail</div>

            <div>
                <h4>{0 <= id && id < 3 ? p.menu[id].title : "없는 항목"} </h4>
                {Ui == true ? <h2>찾아오시는길 안내 입니다.</h2> : <h2>찾아오는 방법 안내 입니다.</h2>}
                <span>5호선 강일역에 내리셔서 3번 출구로 100m 직진 후 2층 상가에 위치하고있습니다.</span>
            </div>

            {/*
            여기서 onChnge()는 input 박스가 바뀔때 마다 실행하는 함수
            e는 이벤트 객체
            e.target.value => input에 현재 입력된 값
            */}
            <input onChange={(e) => { inputDataChange(e.target.value) }} />
            {inputData}

            <button onClick={() => {
                //history.goBack();//goBack()함수와 같은 함수들의 사용법은 라이브러리 문서를 참고
                history.push('/')//원하는 경로로 이동
            }}>뒤로가기</button>

            {/*
            fetch()와 axios의 가장 큰 차이점은 axios()는 json으로 받은 데이터들을 Object로 알아서 바꿔줌 
            */}
            <button onClick={() => {
                //지금은 서버가 없어서, 코딩애플에서 만들어준 서버 사용
                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((dataResult) => {
                        console.log(dataResult.data[0].price);
                        console.log('요청 성공');

                    }) //성공햇을때
                    .catch(() => {
                        console.log('요청 실패');
                    }); //실패했을때
            }}>더보기</button>
        </div>

    )
}

export default Detail;//Detail 함수를 외부에서 호출 할 수 있음