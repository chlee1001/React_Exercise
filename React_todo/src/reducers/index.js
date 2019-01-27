// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
import * as types from '../actions/ActionTypes';

// 초기상태 정의
const initialState = {};

/* 리듀서 함수를 정의.. 리듀서는 state와 action을 파라미터로 받는다.
  state가 undefined일 때 (스토어가 생성될 때) state 기본 값을 initialState로 사용
  action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환
  이때 주의할 점은 state를 직접 수정하면 안 되고,
  기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야한다.
*/

function example(state = initialState, action) {}

export default example;
