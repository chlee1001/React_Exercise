// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
import * as types from '../actions/ActionTypes';

// 초기상태 정의
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

/* 리듀서 함수를 정의.. 리듀서는 state와 action을 파라미터로 받는다.
  state가 undefined일 때 (스토어가 생성될 때) state 기본 값을 initialState로 사용
  action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환
  이때 주의할 점은 state를 직접 수정하면 안 되고,
  기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야한다.
*/

function counter(state = initialState, action) {
  // 래퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    // 카운터 추가 및 삭제
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    // 증가, 감소, 색상 변경 구현
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index.number - 1]
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;
