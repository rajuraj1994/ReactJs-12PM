import MyRoute from "./MyRoute";
import { createStore } from 'redux'
// createStore is used to know for compiler that any reducer is a store
import { Provider } from 'react-redux'
// to provide data from reducer to all the components

import cartReducer from './redux/reducer/cartReducer'

function App() {
  const store = createStore(cartReducer)

  return (
    <>
      <Provider store={store}>
        <MyRoute />
      </Provider>
    </>
  )
}

export default App
