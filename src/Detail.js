import React, { useState } from 'react';
import { useHistory , useParams} from 'react-router-dom';//useHistroy를 훅이라고 부름

function Detail(p){//모듈화

    let {id} = useParams();
    let history = useHistory();//이동햇던 방문기록을 저장해놓는 object
   

    return(
        <div>
            <div>
            <h4>{0<=id&&id<3?p.menu[id].title : "없는 항목"} </h4>
            <h2>찾아오시는길 안내 입니다.</h2>
                <span>5호선 강일역에 내리셔서 3번 출구로 100m 직진 후 2층 상가에 위치하고있습니다.</span>
            </div>
            <button onClick = {()=>{
                //history.goBack();//goBack()함수와 같은 함수들의 사용법은 라이브러리 문서를 참고
                history.push('/')//원하는 경로로 이동
            }}>뒤로가기</button>
        </div>

    )
}

export default Detail;//Detail 함수를 외부에서 호출 할 수 있음