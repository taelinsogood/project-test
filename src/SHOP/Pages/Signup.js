import React from 'react'
import back from 'img/쿠키배경.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwtwo, setPwtwo] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState('');
  const [phonNum, setPhonNum] = useState('');

  const submit = (e) => {
    e.preventDefault();
  }

  const emailChange = (e) => {
    setEmail(e.target.value);
    const regex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)){
      setCheckEmail(true)
    } else {
      setCheckEmail(false);
    }
  }

  const pwChange = (e) => {
    setPw(e.target.value);
    const regex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
        setCheckPw(true);
    } else {
      setCheckPw(false);
    }
  }

  const samepw = (e) => {
    setPwtwo(e.target.value);
      if (pw === pwtwo){
        setFocus(true)
      } else {
        setFocus(false)
      }
  }
  return (
    <>
    <div className='signnav'>
    <center><div className='Htitle'>Sign-up</div></center>
        <from className='loginput' onsubmit={submit}>
          <div className='set'>
            <div className='emails'>이메일</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='이메일을 입력하세요'
                type="text"
                value={email}
                onChange={emailChange}
                />
            </div>
            <div className='erroremessage-s'>
           { !checkEmail && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
           )}
            </div>
          </div>
          <div className='set'>
            <div className='pws'>비밀번호</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='비밀번호를 입력하세요'
                type="password"
                value={pw}
                onChange={pwChange}
              />
            </div>
            <div className='erroremessage-2'>
            { !checkPw && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
            </div>
          </div>
          <div className='set'>
            <div className='pws2'>비밀번호 확인</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='위와 같은 비밀번호를 입력하세요'
                type="password"
                value={pwtwo}
                onChange={samepw}
              />
            </div>
            <div className='erroremessage-s2'>
            { !focus && pwtwo.length > 0 && (
              <div>비밀번호와 일치하지 않습니다.</div>
            )}    
            </div>
          </div>
          <div className='set'>
            <div className='namess'>이름</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='이름을 입력하세요'
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
          </div>
          <div className='set'>
            <div className='pws'>전화번호</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='- 제외하고 입력하세요'
                type="text"
                value={phonNum}
                onChange={(e)=>setPhonNum(e.target.value)}
                />
            </div>
          </div><div className='set'>
            <div className='datas'>생년월일</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='생년월일을 입력하세요'
                type="date"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
          </div>
        </from>
        <br/>
        <div className='buttons'>
          <button  type='submit' className='button'>회원가입</button>
          <Link to="/"><button className='button'>홈으로</button></Link>
        </div>
        <br/>
        <br/>
      </div>
      <div className='loginall'>
        <img src={back}></img>
        <img src={back}></img>
        <img src={back}></img>
      </div>
    </>
  )
}

export default Signup