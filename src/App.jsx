import Header from "./component/header"
import { Footer } from "./component/footer"
import { Home } from "./component/home"
import { OneWay } from "./component/binding/one-way"
import Number from "./component/binding/number"
import CssBinding from "./component/binding/CssBinding"
import Boolean from "./component/binding/boolean"
import Nulltype from "./component/binding/Nulltype"
import Undefined from "./component/binding/Undefined"
import Object from "./component/object-Ajax/object"
import Ajax from "./component/object-Ajax/ajax"
import Fetch from "./component/object-Ajax/fetch"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App(){
  return(
    <div>
      <Fetch></Fetch>
    </div>
  )
}
export default App