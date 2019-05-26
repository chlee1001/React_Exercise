import React, { useState, useRef } from 'react';

const WordRelayHooks = () => {
    const [word, setWord] = useState('채현');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onsubmitForm = e => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value)
    };

    return (
        <div>
            <div>{word}</div>
            <form onSubmit={onsubmitForm}>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </div>
    );
};

export default WordRelayHooks;