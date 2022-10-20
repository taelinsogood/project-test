import React, { useState } from 'react'
import 'css/login.css';
import back from 'img/쿠키패턴login.png';
import { Link } from 'react-router-dom';

const User = {  // const 좀 잊지마 !!
  email: "smhrd@naver.com",
  pw: "smhrd12@@"
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [erroremail, setErroremail] = useState(false);
  const [errorpw, setErrorpw] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
    const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)){
      setErroremail(true);
    } else{
      setErroremail(false);
    }
  }
  const pwChange = (e) => {
    setPw(e.target.value);
    const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)){
      setErrorpw(true)
    } else {
      setErrorpw(false)
    }
  }

  const logincheck = () => {
    if (User.email === email && User.pw === pw){
      alert("로긴 성공")
    } else {
      alert("회원가입 안행?!!")
    }
  }
  return (
    <>
      <div className='absol'>
        <center><div className='Htitle'>Log-in</div></center>
        <div className='loginput'>
          <div className='set'>
            <div className='names'>이메일</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='이메일을 입력하세요'
                type="text"
                value={email}
                onChange={emailChange}
              />
            </div>
            <div className='erroremessage'>
            { !erroremail && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
            </div>
          </div>
          <div className='set'>
            <div className='names2'>비밀번호</div>
            <div className='inputWrap'>
              <input
                className='input'
                placeholder='비밀번호를 입력하세요'
                type="password"
                value={pw}
                onChange={pwChange}
              />
            </div>
            <div className='erroremessage2'>
            { !errorpw && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button className='button' onClick={logincheck}>로그인</button>
          <Link to="/"><button className='button'>홈으로</button></Link>
        </div>
            <div className='without'>비밀번호 찾기ㅤ|ㅤ아이디 찾기ㅤ|ㅤ<Link to="/signup" className='signuplink'>회원가입</Link></div>
      </div>
      <div className='loginall'>
        <img src={back}></img>
        <img src={back}></img>
        <img src={back}></img>
      </div>
    </>
  )
}

export default Login