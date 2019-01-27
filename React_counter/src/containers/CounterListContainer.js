import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

/* store 안의 state 값을 props로 연결
  mapStateToProps: store.getState() 결과 값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반환
*/
const mapStateToProps = state => ({ counters: state.counters });

/* 액션 생성 함수를 사용하여 액션을 생성하고,
  해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결
  mapDispatchToProps: dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체 안에 넣어서 반환
*/
const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor(index, color));
  }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterListconatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListconatiner;

/* 이렇게 하면 mapStateToProps의 color, number 값과 mapDispatchToProps의 onIncrement, onDecrement, onSetColor의 값이 Counter 컴포넌트의 props로 들어간다.
  App컴포넌트에서 Counter 대신에 Countercontainer컴포넌트를 불러와 렌더링
*/
