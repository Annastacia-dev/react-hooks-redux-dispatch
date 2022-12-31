let state;
let action = { type: "counter/increment" };

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state,action)
  render()
}

function render () {
    document.body.textContent = state.count
    const button = document.createElement('button')
    button.textContent = 'Increment'
    button.addEventListener('click', () => {
        dispatch(action)
    })
    document.body.appendChild(button)
}

dispatch({ type: "@@INIT" });










