import React, { Component } from 'react';

class wordRelay extends Component {
    state = {
        word: '채현',
        value: '',
        result: '',
    };

    onSubmitForm = e => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                word: '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    };

    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <div>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>

            </div>
        )
    }
}

export default wordRelay;