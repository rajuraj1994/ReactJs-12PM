import MyRoute from "./MyRoute";
import { createStore } from 'redux'
// createStore  is used to know for compiler that any reducer is a store
import { Provider } from 'react-redux'
//to provide data from reducer to component

import cartReducer from "./redux/reducer/cartReducer";
import gameReducer from "./redux/reducer/gameReducer"
import {combineReducers} from 'redux'

const RootReducer=combineReducers({
         cart:cartReducer,
         game:gameReducer
})

function App() {
  const store = createStore(RootReducer)
  return (
    <>
      <Provider store={store}>
        <MyRoute />
      </Provider>
    </>
  );
}

export default App;
