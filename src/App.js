//
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    let post = '역삼 우동 맛집';
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState(0);

    return (
        <div className="App" id={post}>
            <Modal />
            <div className="black_nav">
                <h4>React 블로그</h4>
            </div>
            <br />
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy.sort();
                    글제목변경(copy);
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy[0] = '꼬마 코트 추천';
                    글제목변경(copy);
                }}
            >
                글수정
            </button>
            <div className="list">
                <h4 className="title">
                    {글제목[0]}
                    <span
                        onClick={() => {
                            따봉변경(따봉 + 1);
                        }}
                    >
                        👍
                    </span>
                    {따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

// 컴포넌트 만드는 법
// 1. 저시기 밖에다가 function 만들고 2. return() 안에 html 담기 3. <함수명></함수명> 쓰기
// react에서는 return 안에는 하나의 태그 덩어리가 들어가야 함. 무슨 말인지 알지?

//컴포넌트로 만들면 좋은 것들
//1.반복적인 html 축약할 때, 2. 큰 페이지들, 3. 자주 변경되는 것들

//컴포넌트의 단점: state를 가져다 쓸 때 변수의 범위 때문에 문제가 생김

//컴포넌트를 이렇게 let, const를 써서 만들기도 한다. 선택의 차이!! const를 쓰면 변수 선언, 변경할 때 오류가 뜨니까 그 점을 이용해서 짱 좋기도 하다.

// const Modal=(){
//     Modal=123
// }
export default App;
