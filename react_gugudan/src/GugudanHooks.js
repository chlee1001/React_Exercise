import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const GugudanHooks = props => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = e => {
    setValue(e.target.value);
  };
  
  const onSubmitForm = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      {/* <div> */}
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

GugudanHooks.propTypes = {};

export default GugudanHooks;
