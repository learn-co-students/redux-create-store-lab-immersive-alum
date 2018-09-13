export default function createStore(reducer) {
  // add your code here
  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch({type: '@@INIT'}) //NOTE: need to add dispatch inside createStore, to initialize action to get state set...

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
