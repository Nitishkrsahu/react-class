import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Reducer from './component/usereducer/Reducer.jsx'
import Fakestore from './component/fakestore/Fakestore.jsx'
import { Provider } from 'react-redux'
import { store } from './component/fakestore/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Fakestore />
    </Provider>
  </StrictMode>,
)