import React, { useRef } from 'react';

import { validateInputValues, changeToHashedPassword } from './lib';

function SignUpPage() {
  const signUpURL = '/account/signup';
  const signUpForm = useRef(null);
  const messageBox = useRef(null);

  const onSubmit = () => {
    const form = signUpForm.current;
    const { isValidated, message } = validateInputValues(form);
    if (!isValidated) {
      messageBox.current.textContent = message;
      return;
    }

    changeToHashedPassword(form);
    form.submit();
  };

  return (
    <div style={{ marginTop: '-140px' }}>
      <form action={signUpURL} method="POST" ref={signUpForm}>
        사용자이름: <input type="text" name="username" />
        <br />
        비밀번호: <input type="password" name="password" />
        <br />
        이름: <input type="text" name="name" />
        <br />
        Email: <input type="text" name="email" />
        <br />
        휴대폰: <input type="text" name="cellPhone" />
        <br />
        <button type="button" onClick={onSubmit}>
          가입하기
        </button>
      </form>
      <p ref={messageBox} />
    </div>
  );
}

export default SignUpPage;
