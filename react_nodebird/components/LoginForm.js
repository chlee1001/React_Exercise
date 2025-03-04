import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";

// usecallback은 함수를 캐싱하는것,,,  useMemo는 값을 캐싱하는 것

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  // const [id, setId] = useState("");
  // const onChangeId = useCallback(e => {
  //   setId(e.target.value);
  // }, []);

  // const [password, setPassword] = useState("");
  // const onChangePassword = useCallback(e => {
  //   setPassword(e.target.value);
  // }, []);

  const onsubmitForm = useCallback(() => {
    // React에서 onFinish는 이미 PreventDefault가 적용되어 있다.
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onsubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loadin={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
